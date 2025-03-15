import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../Slice'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlePayment = () => {
    alert('Payment Successful!')
    dispatch(clearCart())
    navigate('/')
  }

  const handleGoBack = () => {
    navigate('/')
  }

  return (
    <div className="p-4 mt-16">
      {' '}
      {/* Adjusted margin to avoid overlap with Navbar */}
      <h2 className="text-2xl font-bold mb-4">Payment Page</h2>
      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded shadow-md"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
                <span className="text-lg font-semibold">{item.title}</span>
              </div>
              <span className="text-gray-600">${item.price}</span>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">Enter Credit Card Details</h3>
        <input
          type="text"
          placeholder="Card Number"
          className="w-full p-2 mb-2 border rounded outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Card Holder Name"
          className="w-full p-2 mb-2 border rounded outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Expiry Date (MM/YY)"
          className="w-full p-2 mb-2 border rounded outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="CVV"
          className="w-full p-2 mb-4 border rounded outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={handlePayment}
          >
            Make Payment
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            onClick={handleGoBack}
          >
            Go Back to Shopping
          </button>
        </div>
      </div>
    </div>
  )
}

export default Payment
