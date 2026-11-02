import Item from './Item'

function ItemList ({ items }) {
  return (
    <div className='mt-5 grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:px-10'>
      {items.map(item => <Item item={item} key={item.id} />)}
    </div>
  )
}

export default ItemList
