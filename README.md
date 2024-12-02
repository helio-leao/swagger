# Project Overview

This project implements a basic system with two main resources: **Users** and **Products**. It supports the following functionalities:

- **Users Route**: Authentication (Login and Logout)
- **Products Route**: CRUD operations (Create, Read, Update, Delete)

The project has three branches that represent different configurations of Swagger UI and documentation.

---

## Branches

1. **pure-swagger-ui-express**

   - Implements basic Swagger UI with **express**.
   - Provides a simple interface to interact with the Users and Products APIs.

2. **swagger-ui-express-and-swagger-jsdoc**

   - Implements **Swagger UI Express** and **Swagger JSDoc**.
   - Generates API documentation from JSDoc comments within the code.

3. **swaggerautogen**
   - Implements **SwaggerAutogen** for automatic API documentation generation.
   - Automatically generates the Swagger documentation based on routes and comments.

---

## Endpoints

### Users

- **POST /login**: User login
- **POST /logout**: User logout

### Products

- **GET /products**: Get a list of products  
  Optionally, you can provide a `name` query parameter to filter products by name.  
  Example: `/products?name=ProductName`
- **GET /products/:id**: Get a product by ID
- **POST /products**: Create a new product
- **PATCH /products/:id**: Update a product by ID
- **DELETE /products/:id**: Delete a product by ID

---

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Choose the branch you want to work on.
4. Run `npm install` to install the dependencies.
5. Run `npm start` to start the server.

---

## Example Usage

Once the server is running, you can access the Swagger UI at `http://localhost:3000/api-docs` to interact with the APIs.
