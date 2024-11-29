const express = require('express');
const router = express.Router();
const participanteController = require('../controllers/participanteController');

router.post('/', participanteController.createParticipante);
router.get('/', participanteController.getParticipantes);
router.get('/:id', participanteController.getParticipanteById);
router.put('/:id', participanteController.updateParticipante);
router.delete('/:id', participanteController.deleteParticipante);

module.exports = router;
