function ItemDetailSkeleton () {
  return (
    <div className='px-5 grid md:grid-cols-2 gap-5 mt-5'>
      <div className='skeleton w-full h-96'/>
      <div className='flex flex-col justify-between gap-5'>
        <div className='skeleton w-60 h-5'/>
        <div className='skeleton w-30 h-5'/>
        <div className='skeleton w-full h-20'/>
      </div>
    </div>
  )
}

export default ItemDetailSkeleton
