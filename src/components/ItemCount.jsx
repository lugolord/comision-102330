import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'

function ItemCount ({ item }) {
  const [count, setCount] = useState(1)
  const { addToCart } = useContext(CartContext)

  const handleIncrease = () => setCount(prev => prev + 1)
  const handleDecrease = () => setCount(prev => prev - 1)
  const handleAddToCart = () => addToCart({...item, count})

  return (
    <div className='grid gap-2'>
      <p className='text-center font-medium text-xl'>{count}</p>
      <button 
        className='btn btn-success btn-block' 
        onClick={handleIncrease}
        disabled={count === item.stock}
      >
        +
      </button>
      <button 
        className='btn btn-error btn-block' 
        onClick={handleDecrease}
        disabled={count === 1}
      >
        -
      </button>
      <button className='btn btn-primary btn-block' onClick={handleAddToCart}>
        add to cart
      </button>
    </div>
  )
}

export default ItemCount
