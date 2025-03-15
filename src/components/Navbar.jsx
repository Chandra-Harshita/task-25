import { Link } from 'react-router-dom'

const Navbar = () => (
  <div className="fixed top-0 left-0 right-0 bg-blue-600 text-white p-4 shadow-md z-50 flex justify-between items-center">
    <h1 className="text-2xl">Shoe Store</h1>
    <div>
      <Link to="/" className="px-4">
        Home
      </Link>
      <Link to="/payment" className="px-4">
        Payment
      </Link>
    </div>
  </div>
)

export default Navbar
