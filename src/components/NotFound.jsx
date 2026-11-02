import { useNavigate } from 'react-router'

function NotFound () {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-2xl my-10'>404. Aca no hay nada</h2>
      <button 
        onClick={() => navigate('/')} 
        className='btn btn-primary w-60'
      >
        ir al inicio
      </button>
    </div>
  )
}

export default NotFound
