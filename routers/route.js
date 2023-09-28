const { Router } = require("express");
const { getAllCatsController, postCatController, deleteCatController } = require("../controllers/controller");

const router = Router()


router.get('/cats', getAllCatsController);

router.post('/cat', postCatController);

router.delete("/cat",deleteCatController)


module.exports = router;