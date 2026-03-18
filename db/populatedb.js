#! /usr/bin/env node

const { Client } = require("pg");
const { argv } = require('node:process');

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
	const connectionString = process.argv[2];
	if (!connectionString) {
		console.error("No database connection string. Please provide one.");
		process.exit(1);
	}
	console.log("Connecting to: ", connectionString);
	const client = new Client({
		connectionString: connectionString,
	});
	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log("done");
}

main();


