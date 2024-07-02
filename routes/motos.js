const router = require('express').Router();
const motosController = require('../controllers/motos.js');
const validation = require('../middleware/validate.js');
const { isAuthenticated } = require('../middleware/authenticate.js');

router.get('/:id', validation.checkMongoId, motosController.getSingle);
router.get('/', motosController.getAll);
router.post('/', isAuthenticated, validation.saveMoto, motosController.createMoto);
router.put('/:id', isAuthenticated, validation.checkMongoId, validation.saveMoto, motosController.updateMoto);
router.delete('/:id', isAuthenticated, validation.checkMongoId, motosController.deleteMoto);

module.exports = router;