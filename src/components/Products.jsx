import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../Slice'

const Products = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  const handleAddToCart = (product) => {
    dispatch(addItem(product))
  }

  return (
    <div className="p-4 mt-16">
      {' '}
      {/* Adjusted margin to avoid overlap with Navbar */}
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-contain mb-2"
            />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
