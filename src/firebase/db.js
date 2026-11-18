import { getFirestore, getDocs, collection, query, where, doc, getDoc } from "firebase/firestore"
import { app } from './config'

const db = getFirestore(app)

export async function getProducts () {
  const querySnapshot = await getDocs(collection(db, "products"))
  const products = []

  querySnapshot.forEach((doc) => {
    products.push({...doc.data(), id: doc.id})
  })

  return products
}

export async function getCategories () {
  const querySnapshot = await getDocs(collection(db, "categories"))
  const categories = []

  querySnapshot.forEach((doc) => {
    categories.push(doc.data().name)
  })

  return categories
}

export async function getFilterProducts (category) {
  const productsRef = collection(db, "products")
  const q = query(productsRef, where("category", "==", category))
  const querySnapshot = await getDocs(q)
  const products = []
  
  if (querySnapshot.empty) {
    console.log("No se encontraron documentos.")
    return
  }

  querySnapshot.forEach((doc) => {
    products.push({...doc.data(), id: doc.id})
  })

  return products
}

export async function getProductDetail (id) {
  const docRef = doc(db, "products", id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return {...docSnap.data(), id: docSnap.id}
  } else {
    console.log("¡El documento no existe!")
  }
}
