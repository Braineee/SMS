const express = require('express');
const makeCallBack = require('../utils/express-callback.util');
const studentControllers = require('../controllers/studentControllers');
const { connectDbMiddleware } = require('../middlewares');

const router = express.Router();

router.post("/register",  [ connectDbMiddleware ], makeCallBack(studentControllers.createStudentController));
router.patch("/verify/:student_uuid",  [ connectDbMiddleware ], makeCallBack(studentControllers.verifyStudentEmailController));

module.exports = router;