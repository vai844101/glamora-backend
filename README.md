# Glamora Backend

This repository contains the backend for the Glamora application, providing robust APIs for managing products, orders, users, reviews, and more

README.md – Documentation file, likely includes instructions for setup, usage, and API details.
index.js – The main entry point of the application, responsible for initializing the server and middleware.
package.json – Contains metadata, dependencies, and scripts for the project.
src/ (Source Directory)-Houses all the backend logic, divided into different modules for maintainability.

1. Middleware (src/middleware/).

This directory contains middleware functions for handling authentication and authorization.

generateToken.js – Generates authentication tokens (likely JWT) for user sessions.
verifyAdmin.js – Middleware to check if a user has admin privileges.
verifyToken.js – Middleware to verify JWT tokens before processing requests.

2. Orders (src/orders/)

Handles everything related to orders.

orders.model.js – Defines the schema and model for orders.
orders.route.js – Contains routes to handle order-related operations (e.g., create, update, delete orders).

3. Products (src/products/)

Manages product-related operations.
products.model.js – Defines the schema and model for products.
products.route.js – Routes for product-related API endpoints (e.g., fetching product lists, adding products).

4. Reviews (src/reviews/)
Handles product reviews:

reviews.model.js – Schema/model for storing user reviews.
reviews.route.js – Routes for creating, retrieving, and managing reviews.

5. Stats (src/stats/)
Handles statistics and analytics:

stats.route.js – Likely provides endpoints to fetch sales, product performance, or user statistics.

6. Users (src/users/)
Manages user-related functionality.

user.model.js – Defines the schema/model for users.
user.route.js – Routes for user authentication, profile management, etc.

7. Utilities (src/utils/)
Contains helper functions or reusable utilities:

uploadImage.js – Likely handles image uploads, possibly using a cloud service like AWS S3 or Firebase.

Summary
Follows MVC architecture: Each feature (Orders, Products, Reviews, Users) is modularized with separate models and routes.
Security via Middleware: JWT-based authentication (generateToken.js, verifyToken.js, verifyAdmin.js).
Utilities for common tasks: Like image uploads.
Scalability: The project is structured for easy expansion, new features can be added seamlessly.
