

import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { Ingredient, Recipe } from "./model";
import * as dotevn from "dotenv";
// Start writing functions
// https://firebase.google.com/docs/functions/typescript
dotevn.config();

export const helloWorld = onRequest((request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});

// Endpoint to get scanned ingredient information
export const getIngredient = onRequest(async (request, response) => {
    const barCode = request.query.barCode as string;
    const fetchResponse = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barCode}.json`);
    const data = await fetchResponse.json();
    const ingredient: Ingredient = {
        name: data.product.product_name,
        allergens: data.product.allergens_tags,
        nutritionalGrade: data.product.nutrition_grade_fr,
        description: data.product.nutrient_levels,
    }
    response.send(ingredient);
});

// Endpoint to get recipes based on retrieved ingredient
export const getRecipes = onRequest(async (request, response) => {

    const spoonacularApiKey = process.env.SPOONACULAR_API_KEY || "";
    const ingredient = request.query.ingredient as string;


    const fetchResponse = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=5&ranking=1&apiKey=${spoonacularApiKey}`);
    const data = await fetchResponse.json();
    const recipes: Recipe[] = data.map((recipe: any) => {

        return {
            id: recipe.id,
            name: recipe.title,
            image: recipe.image,
            ingredients: [
                ...(recipe.usedIngredients.map((ingredient: any) => ingredient.name) || []),
                ...(recipe.missedIngredients.map((ingredient: any) => ingredient.name) || [])
            ]
        }
    })
    response.send(recipes);

});


