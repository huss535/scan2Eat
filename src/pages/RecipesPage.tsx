import { useEffect, useState } from "react";
import { Recipe } from "../../functions/src/model";
import RecipeContainer from "../components/RecipeContainer";
import { useLocation } from "react-router-dom";

const RecipesPage = () => {

    const [recipesArray, setRecipesArray] = useState<Recipe[]>([]);
    const location = useLocation();
    const { searchTerms } = location.state;


    useEffect(() => {
        fetch(`http://127.0.0.1:5001/scan2eat-8058d/us-central1/getRecipes?ingredient=${searchTerms}`).then(
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