const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true,"le nom est requis"],
        match: [/^[A-Za-zÀ-ÿ' -]{2,50}$/, "nom invalide"],
    },
    firstname : {
        type: String,
        required: [true,"le prenom est requis"],
        match: [/^[A-Za-zÀ-ÿ' -]{2,50}$/, "prenom invalide"],
    },
    age : {
        type: Number,
        required: [true,"l'age est requis"],
        min: 18,
    },
    email : {
        type: String,
        required: [true,"l'email est requis"],
        match: [/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/, "email invalide"],
    },
    password : {
        type: String,
        required: [true,"le mot de pass est requis"],
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, "mot de passe invalide"],
    }
})



const userModel = mongoose.model("users", userSchema);

module.exports = userModel