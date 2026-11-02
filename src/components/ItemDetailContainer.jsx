import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'

function ItemDetailContainer () {
  const [item, setItem] = useState({ 
    thumbnail: 'a', 
    title: '', 
    price: 0, 
    description: ''
  })

  const { id } = useParams()

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setItem(data))
  }, [id])

  return <ItemDetail item={item} />
}

export default ItemDetailContainer
