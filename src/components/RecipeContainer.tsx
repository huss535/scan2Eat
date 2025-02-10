

const RecipeContainer = () => {

    return (<div className="recipe-container">
        <h2>Recipe Container</h2>

        <div className="recipe-action-icon" onClick={() => { console.log('clicked') }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" width={60} height={55} strokeWidth={1.5}><path d="M9 6l6 6l-6 6" /></svg>
        </div>
    </div>);

};

export default RecipeContainer;