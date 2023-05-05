const service = require("../services/appointment");
const createAppointment = async (req, res, next) => {
  console.log("d");
  try {
    const appointments = await service.postAppointmentService(
      req.body,
      req.user
    );
    res
      .status(201)
      .json({ status: "success", data: appointments, completed: true });
  } catch (error) {
    next(error);
  }
};

const getAppointments = async (req, res, next) => {
  try {
    const appointments = await service.getAppointments(req.user);
    res.status(203).json({
      status: "success",
      data: appointments,
    });
  } catch (error) {
    next(error);
  }
};

const patchAppointment = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updateAppointment = await service.patchAppointmentService(
      req.body,
      req.user,
      id
    );
    res.status(203).json({ status: "success", updateAppointment });
  } catch (error) {
    next(error);
  }
};

module.exports = { createAppointment, getAppointments, patchAppointment };
