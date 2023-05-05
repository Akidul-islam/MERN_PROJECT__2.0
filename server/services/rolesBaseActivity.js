const takeError = require("../utilities/error");

const dbGetItems = (model, queryValue) => {
  return model.find(queryValue).select("-password");
};

const dbFindPropertyById = (model, key, value) => {
  if (key === "_id") {
    return model.findById(value);
  }
  return model.findOne({ [key]: value });
};

//   create items
const dbCreateNewItem = (model, data) => {
  // create new data
  const refId = new model(data).save();
  return refId;
};

//   updte by model,user,data
const dbUpdateItem = (model, userId, data) => {
  return model.findByIdAndUpdate(userId, data, {
    new: true,
    findAndModify: false,
    // ValidityState: true,
  });
};

// get all data and also query data servicess
const dbQueryItem = async (queryValue) => {
  const queryObj = {};
  if (queryValue) {
    const { name, email } = queryValue;
    if (name) {
      queryObj.name = { $regex: name, $options: "i" };
    }
  }
  // if(email) return queryObj.email = email
  //  if(role) return queryObj.role = role
  return await dbGetItems(queryObj);
};

// deleted items
const dbDeletedItem = (model, userId) => {
  return model.findByIdAndDelete(userId);
};

// data populate and update function
const populateUpdateItem = (model, key, keyValue, data) => {
  if (!user) throw takeError(`${model}: ${keyValue} Does not Exits`, 404);

  return model.findByIdAndUpdate(
    keyValue,
    { ...data },
    { new: true, ValidityState: true }
  );
};

module.exports = {
  dbFindPropertyById,
  dbCreateNewItem,
  dbDeletedItem,
  dbGetItems,
  dbUpdateItem,
  populateUpdateItem,
};
