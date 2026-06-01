const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Le titre est obligatoire'],
      trim: true,
      minlength: [3, 'Le titre doit contenir au moins 3 caractères'],
      match: [
        /^[a-zA-Z0-9À-ÿ \-'.,]+$/,
        'Le titre ne contient que des lettres, chiffres, espaces, - _ . , \'',
      ],
    },

    ingredients: {
      type: [String],
      required: [true, 'Les ingrédients sont obligatoires'],
    },

    instructions: {
      type: [String],
      required: [true, 'Les instructions sont obligatoires'],
    },

    preparationTime: {
      type: Number,
      required: [true, 'Le temps de préparation est obligatoire'],
      min: [0, 'Le temps de préparation ne peut pas être négatif'],
    },

    cookingTime: {
      type: Number,
      required: [true, 'Le temps de cuisson est obligatoire'],
      min: [0, 'Le temps de cuisson ne peut pas être négatif'],
    },

    difficulty: {
      type: String,
      required: [true, 'La difficulté est obligatoire'],
      enum: ['facile', 'moyen', 'difficile'],
    },

    category: {
      type: String,
      required: [true, 'La catégorie est obligatoire'],
      trim: true,
      match: [
        /^[a-zA-Z0-9_-]+$/,
        'La catégorie doit contenir uniquement des lettres, chiffres, - ou _',
      ],
    },

    image: {
      type: String,
      required: [true, 'L’image est obligatoire'],
      match: [
        /^(https?:\/\/)?([\da-z\.-]+)(\.[a-z]{2,3})?([:\/\w\.-]*)?\/?$/,
        'L’image doit être une URL valide (https://...)',
      ],
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const recipeModel = mongoose.model('recipe', recipeSchema);

module.exports = recipeModel;