"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIngredient = exports.helloWorld = void 0;
const https_1 = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
// Start writing functions
// https://firebase.google.com/docs/functions/typescript
exports.helloWorld = (0, https_1.onRequest)((request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});
exports.getIngredient = (0, https_1.onRequest)(async (request, response) => {
    const barCode = request.query.barCode;
    const fetchResponse = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barCode}.json`);
    const data = await fetchResponse.json();
    const ingredient = {
        name: data.product.product_name,
        allergens: data.product.allergens_tags,
        nutritionalGrade: data.product.nutrition_grade_fr,
        description: data.product.nutrient_levels,
    };
    response.send(ingredient);
});
//# sourceMappingURL=index.js.map