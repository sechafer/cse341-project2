const router = require('express').Router();
const catsController = require('../controllers/cats.js');
const validation = require('../middleware/validate.js');
const { isAuthenticated } = require('../middleware/authenticate.js');

router.get('/:id',isAuthenticated, validation.checkMongoId, catsController.getSingle);
router.get('/',isAuthenticated, catsController.getAll);
router.post('/', isAuthenticated, validation.saveCat, catsController.createCat);
router.put('/:id', isAuthenticated, validation.checkMongoId, validation.saveCat, catsController.updateCat);
router.delete('/:id', isAuthenticated, validation.checkMongoId, catsController.deleteCat);

module.exports = router;