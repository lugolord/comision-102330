import { useState, useEffect } from 'react'
import { getCategories } from '../firebase/db'

export const useCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then(data => setCategories(data))
  }, [])

  return categories
}
