const mongoose = require('mongoose');

// Esquema de Participante
const participanteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    instituicao: { type: String, required: true },
    curso: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Participante', participanteSchema);
