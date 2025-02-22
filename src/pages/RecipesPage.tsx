import { useEffect, useState } from "react";
import { Recipe } from "../../functions/src/model";
import RecipeContainer from "../components/RecipeContainer";

const RecipesPage = () => {

    const [recipesArray, setRecipesArray] = useState<Recipe[]>([]);

    const recipes = ["Spagetti meatball Pasta meatball Pasta",
        "Steak and Chips", "Fish and chips Fish and chips",
        "Chicken Ceaser Salad   Fish and chips Fish and chips", "Creamy Buttery Pecan"];

    useEffect(() => {
        fetch('http://127.0.0.1:5001/scan2eat-8058d/us-central1/getRecipes?ingredient=apple').then(
            response => response.json()).then(
                data => setRecipesArray(data)
            );
    }, []);
    return (
        <main>
            <section className='header-background header-background-seperator'>
                <h1>Recipes</h1>
            </section>
            <div className="recipes-container">
                {recipesArray.map((recipe, index) => (
                    <RecipeContainer key={index} recipe={recipe} />
                ))}
            </div>

        </main>

    );
}

export default RecipesPage;