import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getProducts, getFilterProducts } from '../firebase/db'
import ItemList from './ItemList'
import ItemListSkeleton from './ItemListSkeleton'

function ItemListContainer () {
  const [items, setItems] = useState([])
  const { category } = useParams()
  
  useEffect(() => {
    if (category) {
      getFilterProducts(category)
        .then(data => setItems(data))
      
      return
    }

    getProducts()
      .then(data => setItems(data))
  }, [category])

  return (
    <>
      {!items.length ? <ItemListSkeleton /> : <ItemList items={items} />}
    </>
  )
}

export default ItemListContainer
