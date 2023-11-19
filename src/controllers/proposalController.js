
const mongoose = require('mongoose');
const proposal = require('../models/Proposal');
const Proposal = mongoose.model('Proposal');

exports.get = (req, res) => {
    Proposal.find({ status: true })

        .then(data => {
            res.status(200).send(data);
        })
        .catch(erro => {
            res.status(400).send({
                mensagem: "erro ao pegar projectos",
                error: erro
            });

        })
}


exports.post = (req, res, next) => {

    let newProposal = new Proposal(req.body);
    newProposal.save()
        .then(x => {

            res.status(201).send({
                mensagem: "Proposta cadastrado com sucesso"
            });

        })
        .catch(e => {
            res.status(400).send({
                mensagem: "erro ao cadastrar projecto",
                erro: e
            });
        });


}

exports.put = async (req, res, next) => {

    const proposal = await Proposal.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (proposal) return res.status(200).json(proposal);


    res.status(400).send({
        message: "Falha ao actualizar o projecto"
    });

}

exports.delete = async (req, res, next) => {
    try {
        const updatedProposal = await Proposal.findByIdAndUpdate(
            req.params.id,
            { status: false },
            { new: true }
        );

        if (updatedProposal) {
            return res.status(200).json(updatedProposal);
        }

        res.status(404).send({
            message: "Proposta não encontrada para atualização."
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Erro ao atualizar o proposta."
        });
    }
};