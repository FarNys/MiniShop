const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");

const app = express();
app.use(cors());

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes

app.use("/products", require("./routes/products"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started On PoRt ${PORT}`));
