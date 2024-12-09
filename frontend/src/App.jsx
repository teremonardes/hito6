import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Login from './pages/Login/Login'
import Cart from './Pages/Cart/Cart'
import Register from './pages/Register/Register'
import NotFound from './pages/NotFound/NotFound'
import Pizza from './pages/Pizza/Pizza'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchPizzas from './context/FetchContext'
import CartProvider from './context/CartContext'

function App () {
  return (
    <BrowserRouter>
      <FetchPizzas>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pizza/p001' element={<Pizza />} />
            <Route path='*' element={<NotFound />} />

          </Routes>

          <Footer />
        </CartProvider>
      </FetchPizzas>
    </BrowserRouter>

  )
}

export default App
