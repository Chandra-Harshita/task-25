import { useDispatch } from 'react-redux'
import { addItem } from '../Slice'

const shoes = [
  { id: 1, name: 'Nike Air Max', price: 120 },
  { id: 2, name: 'Adidas Ultra Boost', price: 150 },
  { id: 3, name: 'Puma RS-X', price: 100 },
]

const Home = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Available Shoes</h2>
      <div className="grid grid-cols-1 gap-4">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="border p-4 rounded-md">
            <h3 className="text-xl">{shoe.name}</h3>
            <p>Price: ${shoe.price}</p>
            <button
              onClick={() => dispatch(addItem(shoe))}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
