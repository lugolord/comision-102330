import ItemCount from './ItemCount'

function ItemDetail ({ item }) {
  return (
    <div className='px-50 grid md:grid-cols-2 gap-5 mt-5'>
      <img src={item.image} alt={item.name} className='w-full bg-white rounded' />
      <div className='flex flex-col justify-between gap-5'>
        <p>{item.name}</p>
        <p className='text-green-500 font-medium'>${item.price}</p>
        <p>{item.description}</p>
        <ItemCount item={item} />
      </div>
    </div>
  )
}

export default ItemDetail
