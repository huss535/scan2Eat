import { Ingredient } from '../../functions/src/model';
import InfoSection from '../components/InfoSection';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Generate description based on ingredient data
const generateDescription = (description: {
    fat: string,
    salt: string,
    sugars: string,
    saturatedFat: string,
}) => {
    const neutralSection: string[] = [];
    if (description.fat) {
        neutralSection.push(`${description.fat} in fat`);

    }

    if (description.salt) {

        neutralSection.push(`${description.salt} in salt`);
    }

    if (description.sugars) {
        neutralSection.push(`${description.sugars} in sugars`);
    }
    if (description.saturatedFat) {

        neutralSection.push(`${description.saturatedFat} in saturated fat`);
    }

    const descriptionString = `This product is ${neutralSection.join(", ")}`;
    return descriptionString;
}


const IngredientPage = () => {

    const [ingredient, setIngredient] = useState<Ingredient | null>(null);
    const { ingredientId } = useParams();
    const [neutrionalValue, setNutritionalValue] = useState<string>("");
    const [productDescription, setProductDescription] = useState<string>("");
    const [allergenString, setAllergenString] = useState<string>("");
    const navigate = useNavigate();
    const [searchTerms, setSearchTerms] = useState("");


    useEffect(() => {
        console.log(ingredientId);
        fetch(`http://127.0.0.1:5001/scan2eat-8058d/us-central1/getIngredient?barCode=${ingredientId}`).then(
            response => response.json()).then(
                data => { setIngredient(data); console.dir(data) }
            );
    }, [ingredientId]);




    useEffect(() => {
        if (ingredient) {
            // const formattedSearchTerms = ingredient.name?.replace(/ /g, ",") || "";
            setSearchTerms(ingredient.name); // Store it in state

            // Setting nutritional value
            if (ingredient.nutritionalGrade) {
                setNutritionalValue(ingredient.nutritionalGrade.toUpperCase());
            }

            // Setting ingredient description
            const description = generateDescription(ingredient.description || {
                fat: "0g", salt: "0g", sugars: "0g", saturatedFat: "0g"
            });
            setProductDescription(description);

            // Setting the allergen string
            if (ingredient.allergens && ingredient.allergens.length > 0) {
                setAllergenString(ingredient.allergens.join(", "));
            } else {
                setAllergenString("No allergens found");
            }
        }
    }, [ingredient]);



    const buttonHandler = () => {
        console.log("Button Clicked");

        navigate("/recipes", { state: { searchTerms: searchTerms } });
    }
    return (
        (ingredient ? (<main  >
            <section className='header-background header-background-seperator'>
                <h1>{ingredient.name}</h1>
            </section>

            <section className='page-content'>

                <InfoSection title="Nutritional Value" content={neutrionalValue} />

                <InfoSection title="Allergens" content={allergenString} />

                <p>{productDescription}</p>
            </section>

            <button onClick={buttonHandler}>View Recipes</button>

        </main>) : (<></>))

    );
}

export default IngredientPage;