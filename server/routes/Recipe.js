const express = require('express');
const router = express.Router();
const { Recipe_Ingredient } = require('../models');

// Endpoint to get the list of valid ingredients
router.get('/recipe_ingredients', async (req, res) => {
  try {
    const validIngredients = await Recipe_Ingredient.findAll({
      attributes: ['name'],
      raw: true,
    });

    res.json(validIngredients);
  } catch (error) {
    console.error('Error fetching valid ingredients:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
