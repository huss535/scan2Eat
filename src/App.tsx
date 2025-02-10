
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScannerPage from './pages/ScannerPage'
import RecipesPage from './pages/RecipesPage'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ScannerPage />} />
          <Route path='/recipes' element={<RecipesPage />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
