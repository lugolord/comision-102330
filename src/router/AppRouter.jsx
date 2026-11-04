import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from '../components/Navbar'
import ItemListContainer from '../components/ItemListContainer'
import NotFound from '../components/NotFound'
import ItemDetailContainer from '../components/ItemDetailContainer'
import CartContainer from '../components/CartContainer'
import Checkout from '../components/Checkout'

function AppRouter () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartContainer />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
