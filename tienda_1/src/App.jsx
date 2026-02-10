import { useState } from 'react'
import './App.css'
import products from './data/productos'

function App() {
  const [Cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product])
  }

   const total = Cart.reduce((acc, item) => acc + item.price, 0)

  return (
    <>
      <div>
        <h1>Catalogo De Tienda</h1>

        <ul>
          {products.map(products => (
            <li key={products.id}>
              <strong>{products.name}</strong> - ${products.price.toLocaleString("es-CO")} 
              <button onClick={()=> addToCart(products)}>Agregar al carrito</button>
            </li>
          ))}
        </ul>
            <h2>Total en el Carrito: ${total.toLocaleString("es-CO")}</h2>
      </div>
    </>
  )
}

export default App
