const otpService = require("./otp.service");

async function createOtpForPhone(req, res) {
    try {
        const otp = await otpService.createOtp(+req.body.phone);
        res.status(201).send({otp: otp})
    } catch (err) {
        res.status(400).send({error: err});
    }
}
async function getOtpForPhone(req, res) {
    try {
        const verification = await otpService.verifyOtp({
            phoneNumber: req.query.phone,
            otp: req.query.otp
        })
        if (verification.status === 203) throw verification;
        res.status(200).send({verified: verification});
    } catch (err) {
        res.status(203).send({error: err});
    }
}

module.exports = {
    getOtpForPhone,
    createOtpForPhone
}