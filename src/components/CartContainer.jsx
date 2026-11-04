import { useNavigate } from 'react-router'

function CartContainer () {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col justify-end items-end'>
      <h2>cart</h2>
      <button className='btn' onClick={() => navigate('/checkout')}>ir al checkout</button>
    </div>
  )
}

export default CartContainer
