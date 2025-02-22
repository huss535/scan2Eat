

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

    const spoonacularApiKey: string = process.env.SPOONACULAR_API_KEY || "";
    const ingredient = request.query.ingredient as string;


    const fetchResponse = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=7&ranking=1&apiKey=${spoonacularApiKey}`);
    const data = await fetchResponse.json();
    const recipes: Recipe[] = data.map((recipe: any) => {

        return {
            id: recipe.id,
            name: recipe.title,

        }
    })
    response.send(recipes);

});


// Endpoint to get recipe information based on recipe id
export const getRecipe = onRequest(async (request, response) => {

    const recipeId: string = request.query.recipeId as string;
    const spoonacularApiKey = process.env.SPOONACULAR_API_KEY || "";
    const fetchResponse = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${spoonacularApiKey}`);
    const data = await fetchResponse.json();
    const recipe: Recipe = {
        id: data.id,
        name: data.title,
        summary: data.summary,
        image: data.image,
        diet: data.diets,
        ingredients: data.extendedIngredients.map((ingredient: any) => ingredient.originalName),

    }
    response.send(recipe);
    //673463

});


