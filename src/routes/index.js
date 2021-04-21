const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.routes");
const studentRoutes = require("./student.routes");
const enrolmentRoutes = require("./enrolment.routes");

router.use("/auth", authRoutes);
router.use("/students", studentRoutes);
router.use("/enrolments", enrolmentRoutes);

router.get("/", (req, res) => res.send("Student Managment API"));

module.exports = router;