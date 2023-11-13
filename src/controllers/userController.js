
const mongoose = require('mongoose');
const user = require('../models/User');
const md5 = require('md5');
const User = mongoose.model('User');

const jwt = require('jsonwebtoken')
const scret = process.env.SECRET;

exports.get = (req, res) => {
    User.find({ status: true })

        .then(data => {
            res.status(200).send(data);
        })
        .catch(erro => {
            res.status(400).send({
                mensagem: "erro ao pegar User",
                error: erro
            });

        })
}


exports.post = (req, res, next) => {

    let newUser = new User(req.body);


    newUser.senha = md5(req.body.senha);
    newUser.save()
        .then(x => {

            res.status(201).send({
                mensagem: "User cadastrado com sucesso"
            });

        })
        .catch(e => {
            res.status(400).send({
                mensagem: "erro ao cadastrar User",
                erro: e
            });
        });


}

exports.put = async (req, res, next) => {

    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (user) return res.status(200).json(user);


    res.status(400).send({
        message: "Falha ao actualizar o user"
    });

}

exports.delete = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { status: false },
            { new: true }
        );

        if (updatedUser) {
            return res.status(200).json(updatedUser);
        }

        res.status(404).send({
            message: "User não encontrado para atualização."
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Erro ao atualizar o projeto."
        });
    }
};



exports.login = async (req, res) => {

    let { email, senha } = req.body;

    senha = md5(req.body.senha);
    console.log(senha)
    try {

        if (!email || !senha) {

            return res.status(400).send({
                msg: 'Por favor, preencha todos os campos.'
            });
        }

        console.log(email, senha);

        console.log(scret) 

        const userlogin = await User.findOne({ status: true, senha: senha, email: email });



  
        if (!userlogin) {
            res.status(400).send({
                msg: 'Email ou senha inválidos'
            });
        } else {

            const token = jwt.sign({ email }, scret, { expiresIn: '10d' })
            res.status(200).send({ token, userlogin });


        }
    } catch (error) {

        console.log(error)
        res.status(500).send({

            msg: 'Erro interno, por favor tente novamente.',
            error: error
        });
    }



}