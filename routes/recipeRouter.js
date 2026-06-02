const recipeRouter = require("express").Router()
const recipeModel = require("../models/recipeModel")

recipeRouter.get("/", async (req, res) => {
    try {
        const recipes = await recipeModel.find().populate("author")
        res.json({ recipes })
    } catch (error) {
        res.json({ error: error.message })
    }
})

recipeRouter.post("/", async (req, res) => {
    try {
        const recipeCreated = new recipeModel(req.body)
        await recipeCreated.save()
        res.json({ message: "recette créée avec succès", recipe: recipeCreated })
    } catch (error) {
        res.json({ error: error.message })
    }
})

recipeRouter.get("/:id", async (req, res) => {
    try {
        const recipe = await recipeModel.findById(req.params.id).populate("author")
        res.json(recipe)
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
})

recipeRouter.delete("/:id", async (req, res) => {
    try {
        const recipeDeleted = await recipeModel.findByIdAndDelete(req.params.id)
        res.json({ recipe: recipeDeleted })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
})

recipeRouter.put("/:id", async (req, res) => {
    try {
        const recipeUpdated = await recipeModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )
        res.json({ recipe: recipeUpdated })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
})

module.exports = recipeRouter
