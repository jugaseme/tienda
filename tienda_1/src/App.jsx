import { useState } from 'react'
import './App.css'
import products from './data/productos'

function App() {
  const [Cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product])
  }

   const total = Cart.reduce((acc, item) => acc + item.price, 0)

  const vaciarCarrito = () => {
    setCart([])
  }

  return (
    <>
      <div>
        <h1>Catalogo De Tienda</h1>

        <ul>
          {products.map(products => (
            <li key={products.id}>

              <strong>{products.name} </strong>
              <span className='precio'>${products.price.toLocaleString("es-CO")}</span>
                <p>{products.category}</p>


              <button
               onClick={() => addToCart(products)}
               disabled={Cart.some(item => item.id === products.id)}
                >
               Agregar
              </button>


            </li>
          ))}
        </ul>
           <h2>Carrito: {Cart.length} productos</h2>
          <h3>Total: ${total.toLocaleString("es-CO")}</h3>

            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      </div>
    </>
  )
}

export default App
