const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
