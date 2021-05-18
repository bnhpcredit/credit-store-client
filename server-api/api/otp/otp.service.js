const baseUrl = "https://otplocal.azurewebsites.net/otp";
const axios = require("axios");

async function createOtp(phoneNumber) {
    try {
        const res = await axios.post(baseUrl, {
            "phone": phoneNumber
        });
        return res.data;

    } catch (e) {
        throw e;
    }
}

async function verifyOtp(credentials) {
    try {
        const res = await axios.get(baseUrl, {
            params: {
                phone: credentials.phoneNumber,
                otp: credentials.otp
            }
        })
        return res.data;
    } catch (e) {
        throw e;
    }
}

module.exports = {
     createOtp,
     verifyOtp
}