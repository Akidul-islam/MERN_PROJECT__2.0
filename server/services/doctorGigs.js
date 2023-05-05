const Users = require("../models/users");
const DoctorGig = require("../models/doctorGigs");
const DoctorProfile = require("../models/doctorProfile");
const crudOperation = require("../services/rolesBaseActivity");
const takeError = require("../utilities/error");
const { query } = require("express");
const createGigsService = async (bodyData, authUser, imageFile) => {
  const user = await crudOperation.dbFindPropertyById(
    Users,
    "_id",
    authUser._id
  );
  if (!user) return takeError("user does not found", 404);
  const data = {
    userId: authUser._id,
    // Image: "http://localhost:3000/api/v1" + imageFile.path,
    ...bodyData,
  };
  const gigs = await crudOperation.dbCreateNewItem(DoctorGig, data);
  let profileDoc = await crudOperation.dbFindPropertyById(
    DoctorProfile,
    "userId",
    authUser._id
  );
  profileDoc = await DoctorProfile.findByIdAndUpdate(
    profileDoc._id,
    { $push: { doc_gigs: gigs._id } },
    { new: true, findAndModify: false }
  );
  return profileDoc;
};

const getGigsService = async (queryData) => {
  const queryObject = {};
  const { title } = queryData;
  if (queryData) {
    if (title) {
      queryObject.title = { $regex: title, $options: "i" };
    }
  }

  return await crudOperation.dbGetItems(DoctorGig, queryObject);

  // await crudOperation
  //   .dbFindPropertyById(DoctorProfile, "userId", authUser._id)
  //   .populate("doc_gigs", "-v");
};

module.exports = { createGigsService, getGigsService };
