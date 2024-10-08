const express = require("express");
const cors = require("cors");
const mechanicRoutes = require("./routes/mechanics");
const appointmentRoutes = require("./routes/appointments");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/mechanics", mechanicRoutes);
app.use("/api/appointments", appointmentRoutes);

app.use(errorHandler);

module.exports = app;
