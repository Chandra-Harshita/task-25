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

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg h-[calc(100vh-4rem)] overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
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
                <div className="flex items-center space-x-2">
                  <button
                    className="px-2 bg-gray-300 rounded"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    -
                  </button>
                  <span className="text-gray-600">{item.quantity}</span>
                  <button
                    className="px-2 bg-gray-300 rounded"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>
                </div>
                <span className="text-gray-600">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  className="text-red-500"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center font-bold text-lg">
            <span>Total:</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
          <button
            className="mt-4 w-full bg-red-500 text-white p-2 rounded-lg"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
          <button
            className="mt-2 w-full bg-green-500 text-white p-2 rounded-lg"
            onClick={() => navigate('/payment')}
          >
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  )
}

export default Cart
