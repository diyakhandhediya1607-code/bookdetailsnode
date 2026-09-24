import Book from "../models/bookModel.js";

// CREATE BOOK
export const createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);

        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: book
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


// GET ALL BOOKS
export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();

        res.status(200).json({
            success: true,
            count: books.length,
            data: books
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// GET BOOK BY ID
export const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        res.status(200).json({
            success: true,
            data: book
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid book ID"
        });
    }
};


// UPDATE BOOK
export const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data: book
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


// DELETE BOOK
export const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Book deleted successfully"
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid book ID"
        });
    }
};