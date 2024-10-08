const mongoose = require("mongoose");

const workScheduleSchema = new mongoose.Schema({
  day: {
    type: String,
    enum: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  startTime: String,
  endTime: String,
});

const mechanicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  workSchedule: [workScheduleSchema],
});

module.exports = mongoose.model("Mechanic", mechanicSchema);
