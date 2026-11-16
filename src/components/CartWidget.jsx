import { useNavigate } from 'react-router'
import { useCart } from '../hooks/useCart'

function CartWidget () {
  const navigate = useNavigate()
  const { getCartCount } = useCart()
  const cartCount = getCartCount()

  return (
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
        {cartCount > 0 &&
          (<span className="badge badge-xs badge-primary indicator-item">
            {cartCount}
          </span>)
        }
      </div>
    </button>
  )
}

export default CartWidget
