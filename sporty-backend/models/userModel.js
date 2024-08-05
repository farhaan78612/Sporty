import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [3, "Name must contain at least 3 characters!"],
    maxLength: [30, "Name cannot exceed  30 characters!"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: validator.isEmail,
  },
  phone: {
    type: Number,
    required: [true, "phone number is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [6, "password length should be greater than 6 character"],
    select: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//middle ware
userSchema.pre("save", async function () {
  if (!this.isModified) {
    return;
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//compare password
userSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

//Json web token
userSchema.methods.getJWTToken = function () {
  return JWT.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export default mongoose.model("User", userSchema);
