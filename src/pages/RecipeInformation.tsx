import { useEffect, useState } from "react";
import InfoSection from "../components/InfoSection";
import { Recipe } from "../../functions/src/model";
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify';


const RecipeInformation = () => {
    const recipeTestDummy: Recipe = {
        id: 1,
        name: "Spaghetti Meatball Pasta",
        image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
        summary: "Spaghetti with meatballs is an Italian-American dish that usually consists of spaghetti, tomato sauce and meatballs Italian-American cuisine is a style of Italian cuisine adapted throughout the United States of America. Italian-American food is based on the food of Southern Italy, heavily influenced by Italian",
        diet: ["Vegetarian", "Vegan"],
        ingredients: ["Spaghetti", "Tomato Sauce", "Meatballs"]
    }
    const { recipeId } = useParams();
    /*  const [recipe, setRecipe] = useState<Recipe | null>(null);
     useEffect(() => {
 
         fetch(`http://127.0.0.1:5001/scan2eat-8058d/us-central1/getRecipe?recipeId=${recipeId}`).then(
             response => response.json()).then(
                 data => { setRecipe(data); console.dir(data) }
             );
 
     }, [recipeId]); */
    return (

        <>
            {recipeTestDummy ? ( // Conditionally render based on whether recipe exists
                <main>
                    {/*  <section className='header-background header-background-seperator'>
                        <h1>{recipeTestDummy.name}</h1>
                    </section> */}
                    <img src={recipeTestDummy.image} alt={recipeTestDummy.name} />
                    <section className='page-content'>

                        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(recipeTestDummy.summary || '') }}></p>



                        <InfoSection title="DIET" content={recipeTestDummy.diet?.toString() || "Could not load data"} />
                        <InfoSection title="INGREDIENTS" content={recipeTestDummy.ingredients?.toString() || "Could not load data"} />
                    </section>
                </main>
            ) : (
                <p>Loading...</p> // Show loading message if recipe is not yet available
            )}
        </>
    )
}

export default RecipeInformation;
