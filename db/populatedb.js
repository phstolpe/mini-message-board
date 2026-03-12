#! /usr/bin/env node

const { Client } = require("pg");
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username TEXT NOT NULL,
  text TEXT NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages(username, text) 
VALUES
  ('Amando', 'Hi there!'),
  ('Charles', 'Hello World!'),
  ('Damon', 'Test');
`;

async function main() {
	console.log("seeding...");
	const client = new Client({
		connectionString: process.env.CONN,
	});
	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log("done");
}

main();


