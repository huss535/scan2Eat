import { useEffect, useState } from "react";
import InfoSection from "../components/InfoSection";
import { Recipe } from "../../functions/src/model";
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify';


const RecipeInformation = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    useEffect(() => {

        fetch(`http://127.0.0.1:5001/scan2eat-8058d/us-central1/getRecipe?recipeId=${recipeId}`).then(
            response => response.json()).then(
                data => { setRecipe(data); console.dir(data) }
            );

    }, [recipeId]);
    return (

        <main>
            {recipe ? ( // Conditionally render based on whether recipe exists
                <>
                    <section className='header-background header-background-seperator'>
                        <h1>{recipe.name}</h1>
                    </section>

                    <section className='page-content'>
                        <img src={recipe.image} alt={recipe.name} />
                        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(recipe.summary || '') }}></p>



                        <InfoSection title="DIET" content={recipe.diet?.toString() || "Could not load data"} />
                        <InfoSection title="INGREDIENTS" content={recipe.ingredients?.toString() || "Could not load data"} />
                    </section>
                </>
            ) : (
                <p>Loading...</p> // Show loading message if recipe is not yet available
            )}
        </main>
    )
}

export default RecipeInformation;
