import { Ingredient } from '../../functions/src/model';
import InfoSection from '../components/InfoSection';

const IngredientPage = () => {

    return (

        <div  >
            <section className='header-background header-background-seperator'>
                <h1>paprika</h1>
            </section>

            <InfoSection title="Nutritional Value" content="HIGH" />

            <InfoSection title="Allergens" content="NUTS, SOYBEANS" />

            <p>This product is high in sugar, fat, and saturated fat but low in salt</p>


        </div>
    );
}

export default IngredientPage;