const { app } = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const Student = require("../src/model/student.model");
const mongoose = require("mongoose");
const { beforeEach, afterEach } = require("@jest/globals");
const dataBaseName = "student_test";

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${dataBaseName}`;
  await mongoose.connect(url, { useNewUrlParser: true });
});

// beforeEach(async () => {
//   await students.findOne((student) => {
//     const newStudent = new Student(student);
//     newStudent.save();
//   });
// });
describe("Student /api/v1", () => {
  it("should GET a new student details", async () => {
    const res = await request.get("/test");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("testing endpoints");
  });

  it("should POST a new student details", async () => {
    const res = await await request.post("/signUp").send({
      userName: "paul",
      password: "123456",
    });
    const student = await Student.findOne({ userName: "paul" });
    expect(student.userName).toBeTruthy();
    expect(student.password).toBeTruthy();
  });

  it("should POST a new student details", async () => {
    const res = await await request.post("/signUp").send({
      userName: "paul",
      password: "123456",
    });
    const student = await Student.findOne({ userName: "paul" });
    expect(student.userName).toBeTruthy();
    expect(student.password).toBeTruthy();
  });
});

afterEach(async () => {
  await Student.deleteMany();
});
