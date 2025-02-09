

import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { Ingredient } from "./model";
// Start writing functions
// https://firebase.google.com/docs/functions/typescript

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
