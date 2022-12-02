const express = require("express");
const { pool } = require("./connectionClient");

const app = express();

app.use(express.json());

pool.connect((err) => {
  if (err) {
    console.error("connection error..", err.message);
  } else {
    console.log("DB connected");
  }
});

app.get(["/", "/todos"], async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM todos");
    res.status(200).json({ result: [...result.rows] });
  } catch (error) {
    // console.log(error.stack);
    res.status(500).json({ error: error.message });
  }
});

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM todos where todo_id=$1",[id]);
    res.status(200).json({ result: [...result.rows] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const result = await pool.query(
      "INSERT INTO todos(description) VALUES($1) RETURNING *;",
      [description]
    );
    res.status(200).json({ result: [...result.rows] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM TODOS WHERE todo_id=$1", [id]);

    res.status(200).json({ message:"Success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const result = await pool.query(
      "UPDATE todos SET description=$1 WHERE todo_id=$2",
      [description, id]
    );

    res.status(200).json({ message:"Success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(7000, () => {
  console.log("Listening on localhost:7000....");
});
