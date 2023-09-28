const { getAllCats, postCat, deleteCat } = require("../models/cat");


const getAllCatsController = async (req, res) => {
    getAllCats((result) => {
        res.json({
            statuscode: 200,
            data: result,
            message: 'success'
        });

    });
}

const postCatController = (req, res) => {
    let cat = req.body;
    postCat(cat, (err, result) => {
        if (!err) {
            res.json({
                statuscode: 201,
                data: result,
                message: 'success'
            });
        }
    });
}

const deleteCatController = (req, res) => {
    let cat = req.body;
    deleteCat(cat,(result) => {
        res.json({
            statuscode: 200,
            data: result,
            message: 'success'
        });
    })
}

module.exports = { getAllCatsController, postCatController, deleteCatController }