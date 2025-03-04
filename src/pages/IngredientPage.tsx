import { Ingredient } from '../../functions/src/model';
import InfoSection from '../components/InfoSection';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const IngredientPage = () => {

    const [ingredient, setIngredient] = useState<Ingredient | null>(null);
    const { ingredientId } = useParams();
    useEffect(() => {
        console.log(ingredientId)
    }, [ingredientId]);
    return (
        (ingredient ? (<main  >
            <section className='header-background header-background-seperator'>
                <h1>{ingredient.name}</h1>
            </section>

            <section className='page-content'>

                <InfoSection title="Nutritional Value" content="HIGH" />

                <InfoSection title="Allergens" content="NUTS, SOYBEANS" />

                <p>This product is high in sugar, fat, and saturated fat but low in salt</p>
            </section>

            <button>View Recipes</button>

        </main>) : (<></>))

    );
}

export default IngredientPage;