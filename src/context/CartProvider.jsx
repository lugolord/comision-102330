import { CartContext } from './CartContext'
import { useState, useEffect } from 'react'

function CartProvider ({ children }) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const inCart = (item) => cart.some(cartItem => cartItem.id === item.id)

  const addToCart = item => {
    if (inCart(item)) {
      const cartCopy = cart.map(cartItem => {
        if (cartItem.id === item.id) return {...item, count: cartItem.count + item.count}
        
        return cartItem
      })

      setCart(cartCopy)
    } else {
      setCart([...cart, item])
    }
  }

  const getCartCount = () => cart.reduce((acc, current) => acc + current.count, 0) // -> un numerito
  
  const increaseItem = item => {
    if (item.count < item.stock) {
      const cartCopy = cart.map(cartItem => {
        if (cartItem.id === item.id) return {...item, count: cartItem.count + 1}
        
        return cartItem
      })
  
      setCart(cartCopy)
    } else {
      alert('Stock maximo alcanzado!')
    }
  }

  const decreaseItem = item => {
    if (item.count > 1) {
      const cartCopy = cart.map(cartItem => {
        if (cartItem.id === item.id) return {...item, count: cartItem.count - 1}
        
        return cartItem
      })
  
      setCart(cartCopy)
    }
  }

  const removeItem = item => { 
    const cartCopy = cart.filter(cartItem => cartItem.id !== item.id)
    setCart(cartCopy)
  }

  const clearCart = () => setCart([])

  const value = {
    cart,
    addToCart,
    getCartCount,
    increaseItem,
    decreaseItem,
    removeItem,
    clearCart
  }

  return (
    <CartContext value={value}>
      {children}
    </CartContext>
  )
}

export default CartProvider
