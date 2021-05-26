const productsService = require("./products.service");


async function getProducts(req, res) {
    try {
        const products = await productsService.getProducts({
            partyId: req.query.partyId,
        })
        if (products.status === 203) throw products;
        res.status(200).send({products: products});
    } catch (err) {
        res.status(203).send({error: err});
    }
}

module.exports = {
    getProducts
}