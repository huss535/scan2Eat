
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScannerPage from './pages/ScannerPage'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ScannerPage />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
