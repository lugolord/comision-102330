import { useNavigate } from 'react-router'

function EmptyCart () {
  const navigate = useNavigate()
  
  return (
    <div className='grid items-center justify-center mt-10'>
      <h2>No tienes productos en el carrito</h2>
      <button className='btn btn-primary mt-4' onClick={() => navigate('/')}>ir a ver productos</button>
    </div>
  )
}

export default EmptyCart
