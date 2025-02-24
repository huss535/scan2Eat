

import React from 'react';
import { Recipe } from '../../functions/src/model';
import { useNavigate } from 'react-router-dom';
interface RecipeContainerProps {
    recipe: Recipe;
}

const RecipeContainer: React.FC<RecipeContainerProps> = ({ recipe }) => {
    const navigate = useNavigate();

    const recipeDetailHandler = () => {
        navigate(`/recipeDetails/${recipe.id}`);
    }

    return (
        <div className="recipe-container" onClick={recipeDetailHandler}>
            <p>{recipe.name}</p>


        </div>
    );
};

export default RecipeContainer;