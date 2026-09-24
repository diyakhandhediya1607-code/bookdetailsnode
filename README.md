# 📚 Book Details REST API

A clean and modular RESTful API built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)** for managing book records following the MVC (Model-View-Controller) architecture.

---

## 🎥 Project Demo Video

Watch the complete codebase explanation and live API testing demonstration here:  
👉 **[Watch Project Demo Video](https://drive.google.com/file/d/1jT8226G-QVa5qmnG2ZvXhvSc_SlJq6wg/view?usp=sharing)**

---

## 🚀 Features

- **Full CRUD Operations**: Create, Read, Update, and Delete books.
- **MVC Architecture**: Clean separation of models, controllers, routes, and config.
- **Custom Error Handling**: Centralized error middleware for graceful error responses.
- **Input Validation**: Schema validation using Mongoose.
- **Environment Configuration**: Secure environment variable management via `.env`.

---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Dev Tool**: Nodemon

---

## 📁 Project Structure

```text
bookdetailsnode/
├── config/
├── controllers/
├── middleware/
│   └── errorMiddleware.js
├── models/
│   └── bookModel.js
├── routes/
│   └── bookRoutes.js
├── .env
├── .gitignore
├── package.json
└── server.js