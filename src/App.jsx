
import { Route, Routes } from 'react-router-dom'
import '../src/css/App.css'
import LandingPage from './page/LandingPage'
import ContentPage from './page/ContentPage'
import Navbar from './component/Navbar'
import OpeningPage from './page/Opening'
import BeneathPage from './page/Beneath'
import DeepestPage from './page/DeepestPage'
import CasePage from './page/CasePage'
function App() {
  return (
    <div className="container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/concept' element={<ContentPage />} />
          <Route path='/break-the-ice' element={<OpeningPage />} />
          <Route path='/beneath-the-surface' element={<BeneathPage />} />
          <Route path='/the-deepest' element={<DeepestPage />} />
          <Route path='/case' element={<CasePage />} />
        </Routes>
      </main>
    </div>

  )
}

export default App
