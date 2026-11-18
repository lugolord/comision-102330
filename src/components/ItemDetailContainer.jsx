import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getProductDetail } from '../firebase/db'
import ItemDetail from './ItemDetail'
import ItemDetailSkeleton from './ItemDetailSkeleton'

function ItemDetailContainer () {
  const [item, setItem] = useState({ 
    image: 'a', 
    name: '', 
    price: 0, 
    description: ''
  })

  const { id } = useParams()

  useEffect(() => {
    getProductDetail(id)
      .then(data => setItem(data))
  }, [id])

  return (
    <>
      {!item.name ? <ItemDetailSkeleton /> : <ItemDetail item={item} />}
    </>
  )
}

export default ItemDetailContainer
