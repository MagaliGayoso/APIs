const express = require("express");
const router = express.Router();
const { list, detail } = require("../controllers/genresController");

router.get("/genres", list);
router.get("/genres/:id", detail); // un genero en particular

module.exports = router;
