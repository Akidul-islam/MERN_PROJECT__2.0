const serviceAdmin = require("../services/admin");
const patchAdminUpdate = async (req, res, next) => {
  try {
    const admin = await serviceAdmin.adminUpdateService(req.user, req.body);
    res.status(203).json({ status: "success", data: admin });
  } catch (error) {
    next(error);
  }
};

// single
const getAdmin = async (req, res, next) => {
  const { adminId } = req.params;
  try {
    const admin = await serviceAdmin.getAdminService(req.user, adminId);
    res.status(203).json({ status: "success", admin });
  } catch (error) {
    next(error);
  }
};

// all admins
const getAdmins = async (req, res, next) => {
  try {
    const admins = await serviceAdmin.getAdminsService(req.user, req.query);
    res.status(203).json({ status: "success", admins, isbn: admins.length });
  } catch (error) {
    next(error);
  }
};

module.exports = { patchAdminUpdate, getAdmin, getAdmins };
