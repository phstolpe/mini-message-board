const db = require("../db/queries");
const { validationResult } = require("express-validator");

async function getMessages(req, res) {
	const messages = await db.getAllMessages();
	res.render("index", { title: "Mini Message Board", messages: messages });
}

function getForm(req, res) {
	res.render("form", {});
}

async function createMessage(req, res) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(404).render("form", { errors: errors.array() });
	}

	const name = req.body.name;
	const message = req.body.message;
	await db.createMessage(name, message);
	res.redirect("/");
}

module.exports = {
	getMessages,
	getForm,
	createMessage

}
