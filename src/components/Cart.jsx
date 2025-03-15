import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from '../Slice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRemove = (id) => {
    dispatch(removeItem(id))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id))
  }

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id))
  }

  const handlePayment = () => {
    navigate('/payment')
  }

  return (
    <div className="fixed top-16 right-0 w-80 p-4 bg-gray-100 shadow-lg h-[calc(100vh-4rem)] overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-3 rounded-lg shadow-md"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain rounded-lg"
                />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-600">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecrease(item.id)}
                  className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                  -
                </button>
                <span className="px-3 py-1 bg-gray-200 rounded">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleIncrease(item.id)}
                  className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700 font-bold ml-2"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {items.length > 0 && (
        <div className="mt-6 space-y-2">
          <button
            onClick={handlePayment}
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Proceed to Payment
          </button>
          <button
            onClick={handleClearCart}
            className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart
