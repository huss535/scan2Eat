
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScannerPage from './pages/ScannerPage'
import RecipesPage from './pages/RecipesPage'
import IngredientPage from './pages/IngredientPage'
import RecipeInformation from './pages/RecipeInformation'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ScannerPage />} />
          <Route path='/recipes' element={<RecipesPage />} />
          <Route path='/ingredient/:ingredientId' element={<IngredientPage />} />
          <Route path='/recipeDetails/:recipeId' element={<RecipeInformation />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
