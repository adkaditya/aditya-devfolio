require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");


const app = express();

connectDB();
// cross origin request allow karta hai

app.use(cors());
app.use(express.json());

const heroRoutes = require("./routes/heroRoutes");
  app.use("/api/hero", heroRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});