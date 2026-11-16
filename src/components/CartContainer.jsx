import { useNavigate } from 'react-router'
import { useCart } from '../hooks/useCart'
import EmptyCart from './EmptyCart'
import CartItems from './CartItems'

function CartContainer () {
  const navigate = useNavigate()
  const { 
    cart, 
    increaseItem, 
    decreaseItem, 
    removeItem, 
    clearCart 
  } = useCart()

  if (cart.length === 0) {
    return <EmptyCart />
  }

  return (
    <div className='flex flex-col px-4'>
      <h2>cart</h2>
      <CartItems 
        cart={cart} 
        increaseItem={increaseItem} 
        decreaseItem={decreaseItem} 
        removeItem={removeItem} 
      />
      <button className='btn btn-secondary mt-4' onClick={() => clearCart()}>
        vaciar carrito
      </button>
      <button className='btn btn-primary mt-4' onClick={() => navigate('/checkout')}>
        ir al checkout
      </button>
    </div>
  )
}

export default CartContainer
