const express = require("express");
const Student = require("./src/model/student.model");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  res.json({ message: "testing endpoints" });
});

app.get("/users", (req, res) => {
  let students = [
    {
      userName: "Tobi",
      password: "12345",
    },
  ];
  return res.json({ message: "All Students", AllStudents: students });
});

app.post("/signUp", async (req, res) => {
  const { userName, password } = req.body;
  const newStundent = new Student({ userName, password });
  const student = await newStundent.save();

  res.status(201).json(student);
});

module.exports = { app };
