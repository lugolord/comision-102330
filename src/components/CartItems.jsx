function CartItems ({ cart, increaseItem, decreaseItem, removeItem }) {
  return (
    <ul className="list bg-base-300 rounded-box shadow-md">
      {cart.map(cartItem => (
        <li className="list-row" key={cartItem.id}>
          <div><img className="size-10 rounded-box" alt="Tailwind CSS list item" src={cartItem.thumbnail}/></div>
          <div>
            <div>{cartItem.title}</div>
            <div className="text-xs uppercase font-semibold opacity-60">x{cartItem.count}</div>
          </div>
          <button 
            className="btn btn-square btn-success"
            onClick={() => increaseItem(cartItem)}
          >
            <svg aria-label="Add" className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                <path d="M12 5V19M5 12H19"></path>
              </g>
            </svg>
          </button>
          <button 
            className="btn btn-square btn-error"
            onClick={() => decreaseItem(cartItem)}
          >
            <svg aria-label="Remove" className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                <path d="M5 12H19"></path>
              </g>
            </svg>
          </button>
          <button 
            className="btn btn-square btn-ghost"
            onClick={() => removeItem(cartItem)}
          >
            <svg aria-label="Delete" className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                <path d="M3 6H21M8 6V4H16V6M19 6L18 20H6L5 6M10 11V16M14 11V16"></path>
              </g>
            </svg>
          </button>
        </li>
      ))}
    </ul>
  )
}

export default CartItems
