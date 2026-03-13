const pool = require("./pool");

async function getAllMessages() {
	const { rows } = await pool.query("SELECT * FROM messages");
	return rows;
}

async function createMessage(user, text) {
	await pool.query("INSERT INTO messages (username, text)  VALUES ($1, $2)", [user, text]);
}

module.exports = {
	getAllMessages,
	createMessage
}
