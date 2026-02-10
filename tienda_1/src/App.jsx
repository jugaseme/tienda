import { useState } from 'react'
import './App.css'
import products from './data/productos'

function App() {
const [products, setProducts] = useState([])

const [name, setName] = useState("")
const [price, setPrice] = useState("")
const [category, setCategory] = useState("")


const handleAddProduct = () => {
  if (name && price && category) {
    const newProduct = {
      id: products.length + 1,
      name,
      price: parseFloat(price),
      category
    }
    setProducts(prevProducts => [...prevProducts, newProduct])
    setName("")
    setPrice("")
    setCategory("")
  }
}
  


  const [Cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product])
  }

   const total = Cart.reduce((acc, item) => acc + item.price, 0)

  const vaciarCarrito = () => {
    setCart([])
  }
  const handleDelete = (id) => {
  setProducts(prev => prev.filter(p => p.id !== id))
}


  return (
    <>
      <div>
        <h1>Catalogo De Tienda</h1>
            <input 
            type="text"
            placeholder='Nombre del producto'
            value={name}
            onChange={(e) => setName(e.target.value)}
             />
            <input
            type="number"
            placeholder='Precio del producto'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
             />
            <input
            type="text"
            placeholder='Categoria del producto'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
             />
          <button onClick={handleAddProduct}>Agregar Producto</button>




       <ul>
  {products.map(product => (
    <li key={product.id}>
      <strong>{product.name}</strong>
      <span className="price">
        ${product.price.toLocaleString("es-CO")}
      </span>
      <p>{product.category}</p>

      <button onClick={() => handleDelete(product.id)}>
        Eliminar
      </button>
      <button onClick={() => addToCart(product)}>
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
