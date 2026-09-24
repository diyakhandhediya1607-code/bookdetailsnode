    import express from "express";
    import dotenv from "dotenv";

    import connectDB from "./config/db.js";
    import bookRoutes from "./routes/bookRoutes.js";
    import { errorMiddleware } from "./middleware/errorMiddleware.js";

    dotenv.config();

    const app = express();


    // Body parser
    app.use(express.json());


    // Routes
    app.use("/api/books", bookRoutes);


    // Home route
    app.get("/", (req, res) => {
        res.json({
            message: "Book Store API is running"
        });
    });


    // Error middleware
    app.use(errorMiddleware);


    // Database connection
    connectDB();


    // Start server
    const PORT = process.env.PORT || 3200;

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });