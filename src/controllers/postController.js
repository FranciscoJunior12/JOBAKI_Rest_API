
const mongoose = require('mongoose');
const projecto = require('../models/post');
const Projecto = mongoose.model('Post');

exports.get = (req, res) => {
    Projecto.find({ status: true })

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

    let newProject = new Projecto(req.body);
    newProject.save()
        .then(x => {

            res.status(201).send({
                mensagem: "Projecto cadastrado com sucesso"
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

    const post = await Projecto.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (post) return res.status(200).json(post);


    res.status(400).send({
        message: "Falha ao actualizar o projecto"
    });

}

exports.delete = async (req, res, next) => {
    try {
        const updatedProjecto = await Projecto.findByIdAndUpdate(
            req.params.id,
            { status: false },
            { new: true }
        );

        if (updatedProjecto) {
            return res.status(200).json(updatedProjecto);
        }

        res.status(404).send({
            message: "Projeto não encontrado para atualização."
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Erro ao atualizar o projeto."
        });
    }
};