import Item from './Item'

function ItemList ({ items, handleNextPage, handlePrevPage }) {
  return (
    <>
      <div className="px-5 mt-5 flex items-end justify-end gap-5">
        <button 
          className="w-fit join-item btn btn-outline"
          onClick={() => handlePrevPage()}
        >
          Previous page
        </button>
        <button 
          className="w-fit join-item btn btn-outline"
          onClick={() => handleNextPage()}
        >
          Next
        </button>
      </div>
      <div className='mt-5 grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:px-10'>
        {items.map(item => <Item item={item} key={item.id} />)}
      </div>
    </>
  )
}

export default ItemList
