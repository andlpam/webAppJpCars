const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  clientEmail: { type: String, required: true },
  clientPhone: { type: String, required: true },
  carModel: { type: String, required: true },
  carYear: { type: Number, required: true },
  mechanic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mechanic",
    required: true,
  },
  appointmentDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ["booked", "completed", "canceled"],
    default: "booked",
  },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
