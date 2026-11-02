import { useState, useEffect } from 'react'

export const useCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  return categories
}
