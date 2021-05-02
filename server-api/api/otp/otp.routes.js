const express = require('express');
const { getOtpForPhone, createOtpForPhone } = require('./otp.controller');

const router = express.Router();
router.get('/', getOtpForPhone);
router.post('/', createOtpForPhone);

module.exports = router;