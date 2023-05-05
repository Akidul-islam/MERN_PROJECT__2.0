const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    unique: [true, 'name will be uniue'],
    minlength: [3, 'name will be greater than 3'],
    maxlength: [20, 'name will be less than 10'],
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: [true, 'Email will be Unique'],
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: (prop) => `Invalid email provide you: ${prop.value}`,
    },
  },
  password: {
    type: String,
    required: true,
  },
  role: [
    {
      type: String,
      required: true,
      enum: ['patient', 'doctor', 'admin'],
      default: 'patient',
    },
  ],
  accountStatus: {
    type: String,
    enum: ['Pending', 'Approved', 'Denied'],
    default: 'Pending',
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Users', UserSchema);
