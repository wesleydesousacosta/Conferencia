const Participante = require('../models/participante');

exports.createParticipante = async (req, res) => {
    try {
        const novoParticipante = new Participante(req.body);
        const participanteSalvo = await novoParticipante.save();
        res.status(201).json(participanteSalvo);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar participante', error });
    }
};

exports.getParticipantes = async (req, res) => {
    try {
        const participantes = await Participante.find();
        res.status(200).json(participantes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar participantes', error });
    }
};

exports.getParticipanteById = async (req, res) => {
    try {
        const participante = await Participante.findById(req.params.id);
        if (!participante) return res.status(404).json({ message: 'Participante não encontrado' });
        res.status(200).json(participante);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar participante', error });
    }
};

exports.updateParticipante = async (req, res) => {
    try {
        const participanteAtualizado = await Participante.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(participanteAtualizado);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar participante', error });
    }
};

exports.deleteParticipante = async (req, res) => {
    try {
        await Participante.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar participante', error });
    }
};
