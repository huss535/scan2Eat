/* 
const RecipeContainer = (recipe: string) => {

    const recipeDetailHandler = () => {
        console.log(`Recipe: ${recipe}`);
    }

    return (<div className="recipe-container">
        <h2>{recipe}</h2>

        <div className="recipe-action-icon" onClick={recipeDetailHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" width={60} height={55} strokeWidth={1.5}><path d="M9 6l6 6l-6 6" /></svg>
        </div>
    </div>);

};

export default RecipeContainer; */

import React from 'react';
import { Recipe } from '../../functions/src/model';

interface RecipeContainerProps {
    recipe: Recipe;
}

const RecipeContainer: React.FC<RecipeContainerProps> = ({ recipe }) => {

    const recipeDetailHandler = () => {
        console.log(`Recipe: ${recipe}`);
    }

    return (
        <div className="recipe-container" onClick={recipeDetailHandler}>
            <p>{recipe.name}</p>


        </div>
    );
};

export default RecipeContainer;