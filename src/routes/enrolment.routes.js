const express = require('express');
const { connectDbMiddleware, validateUserMiddleware } = require('../middlewares');
const makeCallBack = require('../utils/express-callback.util');
const enrolmentControllers = require('../controllers/enrolmentControllers');

const router = express.Router();

router.get("/fetch/:query", [ connectDbMiddleware ], makeCallBack(enrolmentControllers.fetchEnrolmentController));
router.post("/enrole", [connectDbMiddleware, validateUserMiddleware ], makeCallBack(enrolmentControllers.createEnrolmentController));
router.delete("/delete/:enrolment_uuid", [connectDbMiddleware, validateUserMiddleware ], makeCallBack(enrolmentControllers.deleteEnrolmentController));

module.exports = router;