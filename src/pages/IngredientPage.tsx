import { Ingredient } from '../../functions/src/model';
import InfoSection from '../components/InfoSection';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Generate description based on ingredient data
const generateDescription = (description: {
    fat: string,
    salt: string,
    sugars: string,
    saturatedFat: string,
}) => {

    const descriptionString = `This product is ${description.fat} in fat, ${description.saturatedFat} in saturated fat, ${description.sugars} in sugars, ${description.salt} in salt`;
    return descriptionString;
}

const IngredientPage = () => {

    const [ingredient, setIngredient] = useState<Ingredient | null>(null);
    const { ingredientId } = useParams();

    const [neutrionalValue, setNutritionalValue] = useState<string>("");
    const [productDescription, setProductDescription] = useState<string>("");

    useEffect(() => {
        console.log(ingredientId);
        fetch(`http://127.0.0.1:5001/scan2eat-8058d/us-central1/getIngredient?barCode=${ingredientId}`).then(
            response => response.json()).then(
                data => { setIngredient(data); console.dir(data) }
            );
    }, [ingredientId]);

    useEffect(() => {
        if (ingredient?.nutritionalGrade) {
            setNutritionalValue(ingredient.nutritionalGrade);
        }

        const description = generateDescription(ingredient?.description || { fat: "0g", salt: "0g", sugars: "0g", saturatedFat: "0g" });
        setProductDescription(description);

    }, [ingredient]);
    return (
        (ingredient ? (<main  >
            <section className='header-background header-background-seperator'>
                <h1>{ingredient.name}</h1>
            </section>

            <section className='page-content'>

                <InfoSection title="Nutritional Value" content={neutrionalValue} />

                <InfoSection title="Allergens" content="NUTS, SOYBEANS" />

                <p>{productDescription}</p>
            </section>

            <button>View Recipes</button>

        </main>) : (<></>))

    );
}

export default IngredientPage;