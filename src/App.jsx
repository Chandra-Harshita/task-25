import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store' // Import the configured store

// Components
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'
import Payment from './components/Payment'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="flex">
          <div className="w-3/4 p-4">
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </div>
          <div className="w-1/4 p-4 fixed right-0 top-16">
            <Cart />
          </div>
        </div>
      </Router>
    </Provider>
  )
}

export default App
