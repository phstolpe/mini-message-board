const { Router } = require("express");
const { body } = require("express-validator");

const indexRouter = Router();
const indexController = require("../controllers/indexController.js");

const validateMessage = [
	body("name").trim().isAlpha().withMessage("Name must contain letters only.").isLength({ min: 3, max: 15 }).withMessage("Must be between 3 and 15 characters"),
	body("message").trim().isLength({ min: 1, max: 200 }).withMessage("Message length must be between 1 and 200 characters")
];


indexRouter.get("/", indexController.getMessages);
indexRouter.get("/new", indexController.getForm);

indexRouter.post("/new", validateMessage, indexController.createMessage);

module.exports = indexRouter;
