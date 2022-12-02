CREATE DATABASE todos;

CREATE TABLE TODOS(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);
--sudo apt install postgresql postgresql-contrib
--sudo service postgresql start
-- su - postgres
-- Change the user to postgres :
--sudo -i -u postgres

-- su - postgres
-- Create User for Postgres (in the shell and NOT with psql)

-- $ createuser testuser
-- Create Database (same)

-- $ createdb testdb
-- Acces the postgres Shell

-- psql ( enter the password for postgressql)
-- Provide the privileges to the postgres user

-- $ alter user testuser with encrypted password 'qwerty';
-- $ grant all privileges on database testdb to testuser;

--ALTER USER myuser WITH SUPERUSER;
