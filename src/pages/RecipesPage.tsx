import RecipeContainer from "../components/RecipeContainer";

const RecipesPage = () => {

    const recipes = ["Spagetti meatball Pasta", "Steak and Chips", "Fish and chips", "Chicken Ceaser Salad", "Creamy Buttery Pecan"];

    return (
        <div id="recipes-page">
            <section className='header-background header-background-seperator'>
                <h1>Recipes</h1>
            </section>
            <div className="recipes-container">
                {recipes.map((recipe, index) => (
                    <RecipeContainer key={index} recipe={recipe} />
                ))}
            </div>

        </div>

    );
}

export default RecipesPage;