const router = require('express').Router();
const catsController = require('../controllers/cats.js');
const validation = require('../middleware/validate');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/:id', validation.checkMongoId, catsController.getSingle);
router.get('/', catsController.getAll);
router.post('/', isAuthenticated, validation.saveCat, catsController.createCat);
router.put('/:id', isAuthenticated, validation.checkMongoId, validation.saveCat, catsController.updateCat);
router.delete('/:id', isAuthenticated, validation.checkMongoId, catsController.deleteCat);

module.exports = router;