const userRouter = require("express").Router()
const userModel = require("../models/userModel")

userRouter.get("/", async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json({ message: "Listes d'Utilisateur : ", users });
    } catch (error) {
        res.status(500).json({ err: error.message })
    }
})

userRouter.get("/:id", async (req, res) => {
    try {
        const finduserbyid = await userModel.findById(req.params.id)

        if (!finduserbyid) {
            return res.status(404).json({ message: 'Utilisateur introuvable' });
        }

        res.status(200).json(finduserbyid);
    } catch (error) {
        res.status(500).json({ err: error.message });
    }
})


userRouter.post("/", async (req, res) => {
    try {
        const newuser = new userModel(req.body)
        await newuser.save();
        res.status(201).json({ message: "utilisateur créer avec succée", user: newuser })
    } catch (error) {
        res.status(400).json({ err: error.message });
    }
})

userRouter.delete("/:id", async (req, res) => {
    try {
        const usertodelete = await userModel.findByIdAndDelete(req.params.id);

        if (!usertodelete) {
            return res.status(404).json({ message: "Utilisateur introuvable" })
        }

        res.status(200).json({ message: "Utilisateur Supprimé" })
    } catch (error) {
        res.status(500).json({ err: error.message });
    }
})

userRouter.put("/:id", async (req, res) => {
    try {


        const modifyuser = await userModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true })
        if (!modifyuser) {
            res.status(404).json({ err: error.message });
        }
        res.status(200).json({ message: "utilisateur modifier avec succée", user: modifyuser })
    } catch (error) {
        res.status(400).json({ err: error.message });

    }
})

module.exports = userRouter