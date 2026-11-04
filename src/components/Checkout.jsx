import { useNavigate } from 'react-router'

function Checkout () {
  const ok = false
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (ok) navigate('/')
    else alert('hubo un error')
  }

  return (
    <div>
      <h2>checkout</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Fullname</legend>
          <input type="text" className="input" placeholder="Pepito Perez" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email</legend>
          <input type="email" className="input" placeholder="pepito@gmail.com" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Phone number</legend>
          <input type="text" className="input" placeholder="+5491123434545" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Address</legend>
          <input type="text" className="input" placeholder="Konoha 123" />
        </fieldset>
        <button className='btn'>finalizar compra</button>
      </form>
    </div>
  )
}

export default Checkout
