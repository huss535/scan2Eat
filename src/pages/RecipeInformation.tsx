import InfoSection from "../components/InfoSection";




const RecipeInformation = () => {

    return (
        <main>

            <section className='header-background header-background-seperator'>
                <h1>
                    Peach Pie
                </h1>
            </section>

            <section className='page-content'>

                <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL3Jhd3BpeGVsX29mZmljZV8zMF9hX2RyYXdpbmdfb2ZfYV9idXJnZXJfaW5fdGhlX3N0eWxlX29mX2JvbGRfb181NWI2OWI5ZC02YjQ2LTRkZDctYWFlMy0wMDkzOTUwODc5ZDdfMS5wbmc.png" />

                <p>

                    Rich in protein and omega-3s, this flavorful dish supports heart and brain health. Packed with vitamins B12 and D, it’s a nutrient-dense meal with around 200-250 calories per serving.
                </p>

                <InfoSection title="INGREDIENTS" content="Peanut butter, Butter, Milk, Sugar, Oil, Cornstarch, Garlic, Salt" />
            </section>
        </main>
    )
}

export default RecipeInformation;
