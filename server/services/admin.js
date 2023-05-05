const Admin = require("../models/admin");
const crudOperation = require("../services/rolesBaseActivity");
const takeError = require("../utilities/error");

// update profile
const adminUpdateService = async (authUser, adminData) => {
  if (authUser.role.includes("admin")) {
    let admin = await crudOperation.dbFindPropertyById(
      Admin,
      "userId",
      authUser._id
    );
    if (!admin) throw takeError("doctor does not found", 404);
    admin = await crudOperation.dbUpdateItem(Admin, admin._id, adminData);
    return await admin.save();
  }
};

const getAdminService = async (authUser, paramId) => {
  let admin = await crudOperation.dbFindPropertyById(Admin, "userId", paramId);
  if (!admin) return takeError("admin not found", 400);
  return await crudOperation
    .dbFindPropertyById(Admin, "userId", paramId)
    .populate("userId", "-password -_v -_id");
};

// all
const getAdminsService = async (authUser, queryData) => {
  const queryObject = {};
  const admins = crudOperation.dbFindPropertyById(
    Admin,
    "userId",
    authUser._id
  );
  if (!admins) return takeError("admins does not exits", 400);
  return await crudOperation
    .dbGetItems(Admin, queryObject)
    .populate("userId", "name email role accountStatus");
};

module.exports = { adminUpdateService, getAdminService, getAdminsService };
