const mongoose = require("mongoose");
const { Schema } = mongoose;

const doctorGigSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    Image: { type: String },

    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
      default: "unavalable",
    },
    rating: {
      type: String,
      default: 0,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DoctorGig", doctorGigSchema);
