// index.js is working as app.js
const express = require("express");
const bodyParser = require("body-parser");

const feedRoutes = require("./routes/feeds");

const app = express();

app.use(bodyParser.json());

// CORS middleware
// We need this because our frontend (e.g., running on http://localhost:3000)
// will send requests to our backend (http://localhost:8080).
// By default, browsers block cross-origin requests for security reasons.
// These headers tell the browser to allow requests from other origins,
// and to accept specific methods (GET, POST, PUT, PATCH, DELETE)
// and headers (Content-Type, Authorization).
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Origin", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

app.listen(8080, () => {
  console.log("Listening to port 8080");
});
