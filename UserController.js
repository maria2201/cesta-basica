const User = require("../models/User")

module.exports = {
    async store(req, res){
        const user = await Users.create(req.body);
        return res.send(user);
    },
    async list(req,res){
        const user = await Users.find({});
        return res.json(user);
    },
    async index(req,res){
        const user = await Users.findOne({email: req.params.email});
        return res.json(user);
    },
    async update(req,res) {
        const user = await Users.findByIdAndUpdate(req.params.id,req.body,{new: true});
        return res.json(user);
    },
    async destroy(req,res){
        await Users.deleteOne({_id: req.params.id});
        return res.json({message: "Exclusão realizada"});
    }
}