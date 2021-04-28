const express = require('express');
const { getOtpForPhone } = require('./otp.controller');

const router = express.Router();
router.post('', getOtpForPhone)

module.exports = router;