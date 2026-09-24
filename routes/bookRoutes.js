import express from "express";

import {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
} from "../controllers/bookController.js";

const router = express.Router();


// CREATE
router.post("/", createBook);


// READ ALL
router.get("/", getBooks);


// READ ONE
router.get("/:id", getBookById);


// UPDATE
router.put("/:id", updateBook);


// DELETE
router.delete("/:id", deleteBook);


export default router;