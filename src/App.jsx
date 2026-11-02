import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import NotFound from './components/NotFound'
import ItemDetailContainer from './components/ItemDetailContainer'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
