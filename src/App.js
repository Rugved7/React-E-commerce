import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Shop from './pages/Shop/Shop'
import Cart from './pages/Cart/Cart'
import { ShopContextProvider } from './Context/ShopContext'
const App = () => {
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <Header />
          <Routes>

            <Route path='/' element={<Shop />} />
            <Route path='/Cart' element={<Cart />} />


          </Routes>
        </Router>
      </ShopContextProvider>

    </div>
  )
}

export default App