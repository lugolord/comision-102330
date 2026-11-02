function ItemDetail ({ item }) {
  return (
    <div className='px-5 grid md:grid-cols-2 gap-5 mt-5'>
      <img src={item.thumbnail} alt={item.title} className='w-full bg-white rounded' />
      <div className='flex flex-col justify-between'>
        <p>{item.title}</p>
        <p className='text-green-500 font-medium'>${item.price}</p>
        <p>{item.description}</p>
        <button className='btn btn-primary btn-block'>add to cart</button>
      </div>
    </div>
  )
}

export default ItemDetail
