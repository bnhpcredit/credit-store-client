const baseUrl = "https://creditstorenew.azurewebsites.net/products";
const axios = require("axios");


async function getProducts(credentials) {
    try {
        const res = await axios.get(baseUrl, {
            params: {
                partyId: credentials.partyId,
            }
        })
        return res.data;
    } catch (e) {
        throw e;
    }
}

module.exports = {
    getProducts
}