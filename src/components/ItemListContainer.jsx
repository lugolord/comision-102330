import { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import ItemList from './ItemList'
import ItemListSkeleton from './ItemListSkeleton'

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
      .then(data => {
        setTimeout(() => {
          setItems(data.products)
        }, 2000)
      })
  }, [category, skip])

  return (
    <>
      {!items.length ? <ItemListSkeleton /> : <ItemList items={items} handleNextPage={handleNextPage}handlePrevPage={handlePrevPage} />}
    </>
  )
}

export default ItemListContainer
