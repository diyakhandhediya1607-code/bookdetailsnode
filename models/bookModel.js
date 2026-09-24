import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        author: {
            type: String,
            required: true,
            trim: true
        },

        price: {
            type: Number,
            required: true,
            min: 0
        },

        category: {
            type: String,
            required: true,
            trim: true
        },

        publishedYear: {
            type: Number,
            required: true
        },

        inStock: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;