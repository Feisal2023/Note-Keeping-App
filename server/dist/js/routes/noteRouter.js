"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controllers/notes/controller");
const router = (0, express_1.Router)();
router.get("/notes", controller_1.getNotes);
router.post("/add-note", controller_1.addNote);
router.put("/edit-note/:id", controller_1.updateNote);
router.delete("/delete-note/:id", controller_1.deleteNote);
exports.default = router;
