const { Router } = require("express");

const indexRouter = Router();
const indexController = require("../controllers/indexController.js");


indexRouter.get("/", indexController.getMessages);
indexRouter.get("/new", indexController.getForm);

indexRouter.post("/new", indexController.createMessage);

module.exports = indexRouter;
