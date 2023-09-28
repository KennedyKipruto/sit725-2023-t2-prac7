const { Router } = require("express");
const { getAllCatsController, postCatController } = require("../controllers/controller");

const router = Router()


router.get('/cats', getAllCatsController);


router.post('/cat', postCatController);


module.exports = router;