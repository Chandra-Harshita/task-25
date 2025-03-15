import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const items = useSelector((state) => state.cart.items)
  const navigate = useNavigate()

  const [cardNumber, setCardNumber] = useState('')
  const [cardHolder, setCardHolder] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const handlePayment = () => {
    if (cardNumber && cardHolder && expiryDate && cvv) {
      alert('Payment Successful!')
      navigate('/')
    } else {
      alert('Please fill all the payment details!')
    }
  }

  return (
    <div className="p-4 mt-16 bg-gray-100 rounded-lg shadow-lg h-[calc(100vh-4rem)] overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Payment Page</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">No items in the cart.</p>
      ) : (
        <>
          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-2 bg-white p-2 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <span className="text-gray-800">{item.name}</span>
                </div>
                <span className="text-gray-600">x{item.quantity}</span>
                <span className="text-gray-600">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center font-bold text-lg mb-4">
            <span>Total:</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>

          {/* Payment Form */}
          <div className="bg-white p-4 rounded-lg space-y-2">
            <label className="block">
              Card Number:
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </label>
            <label className="block">
              Card Holder Name:
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="John Doe"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
              />
            </label>
            <div className="flex space-x-2">
              <label className="block w-1/2">
                Expiry Date:
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </label>
              <label className="block w-1/2">
                CVV:
                <input
                  type="password"
                  className="w-full p-2 border rounded"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </label>
            </div>
            <button
              className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg"
              onClick={handlePayment}
            >
              Pay Now
            </button>
            <button
              className="mt-2 w-full bg-gray-500 text-white p-2 rounded-lg"
              onClick={() => navigate('/')}
            >
              Back to Shopping
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Payment
