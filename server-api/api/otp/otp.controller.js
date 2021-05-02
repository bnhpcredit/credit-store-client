async function createOtpForPhone(req, res) {
    console.log('Hit this point');
    try {
        res.status(200).send({otp: '123456'});
    } catch (err) {
        res.status(400).send({error: err});
    }
}
async function getOtpForPhone(req, res) {
    console.log('Hit this point, get');
    try {
        res.status(200).send({otp: '123456'});
    } catch (err) {
        res.status(400).send({error: err});
    }
}

module.exports = {
    getOtpForPhone,
    createOtpForPhone
}