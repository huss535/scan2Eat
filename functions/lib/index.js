"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecipe = exports.getRecipes = exports.getIngredient = exports.helloWorld = void 0;
const https_1 = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const dotevn = require("dotenv");
// Start writing functions
// https://firebase.google.com/docs/functions/typescript
dotevn.config();
exports.helloWorld = (0, https_1.onRequest)((request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});
// Endpoint to get scanned ingredient information
exports.getIngredient = (0, https_1.onRequest)(async (request, response) => {
    try {
        const barCode = request.query.barCode;
        if (!barCode) {
            response.status(400).send({ error: "Barcode is required." });
            return; // Ensure function ends
        }
        const fetchResponse = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barCode}.json`);
        const data = await fetchResponse.json();
        // Check if the product exists
        if (!data || data.status === 0 || !data.product) {
            response.status(404).send({ error: "Product not found." });
            return;
        }
        const ingredient = {
            name: data.product.product_name || "Unknown",
            allergens: data.product.allergens_tags || [],
            nutritionalGrade: data.product.nutrition_grade_fr || "N/A",
            description: data.product.nutrient_levels || {},
        };
        response.send(ingredient);
    }
    catch (error) {
        console.error("Error fetching product data:", error);
        response.status(500).send({ error: "Internal server error." });
    }
});
// Endpoint to get recipes based on retrieved ingredient
exports.getRecipes = (0, https_1.onRequest)(async (request, response) => {
    const spoonacularApiKey = process.env.SPOONACULAR_API_KEY || "";
    const ingredient = request.query.ingredient;
    const fetchResponse = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=7&ranking=1&apiKey=${spoonacularApiKey}`);
    const data = await fetchResponse.json();
    const recipes = data.map((recipe) => {
        return {
            id: recipe.id,
            name: recipe.title,
        };
    });
    response.send(recipes);
});
// Endpoint to get recipe information based on recipe id
exports.getRecipe = (0, https_1.onRequest)(async (request, response) => {
    const recipeId = request.query.recipeId;
    const spoonacularApiKey = process.env.SPOONACULAR_API_KEY || "";
    const fetchResponse = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${spoonacularApiKey}`);
    const data = await fetchResponse.json();
    const recipe = {
        id: data.id,
        name: data.title,
        summary: data.summary,
        image: data.image,
        diet: data.diets,
        ingredients: data.extendedIngredients.map((ingredient) => ingredient.originalName),
    };
    response.send(recipe);
    //673463
});
//# sourceMappingURL=index.js.map