import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header, Footer } from './components'
import Home from './pages/home/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='main'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
