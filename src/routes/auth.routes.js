const express = require('express');
const { connectDbMiddleware } = require('../middlewares');
const makeCallBack = require('../utils/express-callback.util');
const authControllers = require('../controllers/authControllers');

const router = express.Router();

router.post("/signin", [connectDbMiddleware], makeCallBack(authControllers.signInController));

module.exports = router;