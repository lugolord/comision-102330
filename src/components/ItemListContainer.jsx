import { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import ItemList from './ItemList'

function ItemListContainer () {
  const [items, setItems] = useState([])
  const [skip, setSkip] = useState(0)
  const { category } = useParams()

  const handleNextPage = () => setSkip(prev => prev + 10)
  const handlePrevPage = () => setSkip(prev => skip - 10)
  
  useEffect(() => {
    const urlBase = `https://dummyjson.com/products`
    const urlCategories = `${urlBase}/category/${category}`

    fetch(category ? `${urlCategories}?limit=10&skip=${skip}` : `${urlBase}?limit=10&skip=${skip}`)
      .then(res => res.json())
      .then(data => setItems(data.products))
  }, [category, skip])

  return (
    <ItemList 
      items={items} 
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage} 
    />
  )
}

export default ItemListContainer
