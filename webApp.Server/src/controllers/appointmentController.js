const Appointment = require("../models/appointment");

exports.createAppointment = async (req, res, next) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    next(error);
  }
};

exports.getAppointments = async (req, res, next) => {
  try {
    const { clientEmail, mechanicId } = req.query;
    let query = {};
    if (clientEmail) query.clientEmail = clientEmail;
    if (mechanicId) query.mechanic = mechanicId;
    const appointments = await Appointment.find(query).populate("mechanic");
    res.json(appointments);
  } catch (error) {
    next(error);
  }
};

exports.updateAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    res.json(updatedAppointment);
  } catch (error) {
    next(error);
  }
};

// Add more controller methods as needed
