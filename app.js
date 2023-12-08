const express = require("express");
const bodyParser = require("body-parser"); // Import body-parser
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Create an instance of the Express application
const app = express();

// Use body-parser middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Express Swagger",
      version: "1.0.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes.js"],
};

const specs = swaggerJsdoc(options);

// Serve Swagger UI at /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
