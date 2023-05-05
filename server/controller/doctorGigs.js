const service = require("../services/doctorGigs");

const createGigs = async (req, res, next) => {
  try {
    const doctorGig = await service.createGigsService(
      req.body,
      req.user,
      req.file
    );
    res.status(200).json({ status: "success", doctorGig });
  } catch (error) {
    next(error);
  }
};
const getGig = async (req, res, next) => {
  try {
    const Gigs = await service.getGigsService(req.query);
    res.status(203).json({ status: "success", Gigs, isbn: Gigs.length });
  } catch (error) {
    next(error);
  }
};

module.exports = { createGigs, getGig };
