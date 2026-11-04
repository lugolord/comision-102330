import { Link, NavLink, useNavigate } from 'react-router'
import { useCategories } from '../hooks/useCategories'

function Navbar () {
  const categories = useCategories()
  const navigate = useNavigate()

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-96 p-2 shadow grid grid-cols-2">
            {categories.map(category => (
              <li key={category}>
                <NavLink to={`/category/${category}`}>{category}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to='/' className="btn btn-ghost text-xl">
          CoderTienda
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg aria-label="Search" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
        </button>
        <button onClick={() => navigate('/cart')} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              aria-label="Shopping cart"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l2.4 12.2a2 2 0 002 1.8h8.7a2 2 0 002-1.6L22 7H6"
              />
              <circle cx="10" cy="21" r="1" fill="currentColor" />
              <circle cx="19" cy="21" r="1" fill="currentColor" />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item">0</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Navbar
