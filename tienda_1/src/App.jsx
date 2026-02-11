import { useState } from "react"
import "./App.css"

import ProductForm from "./componets/ProductFrom"
import ProductList from "./componets/ProductList"

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")

  const handleAddProduct = () => {
    if (!name || !price || !category) return

    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
      category
    }

    setProducts(prev => [...prev, newProduct])
    setName("")
    setPrice("")
    setCategory("")
  }

  const handleDelete = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id))
  }

  const addToCart = (product) => {
    setCart(prev => [...prev, product])
  }

  const vaciarCarrito = () => {
    setCart([])
  }

  const total = cart.reduce((acc, item) => acc + item.price, 0)

  return (
    <div>
      <h1>Catálogo de Tienda</h1>

      <ProductForm
        name={name}
        price={price}
        category={category}
        setName={setName}
        setPrice={setPrice}
        setCategory={setCategory}
        onAdd={handleAddProduct}
      />

      <ProductList
        products={products}
        onDelete={handleDelete}
        onAddToCart={addToCart}
      />

      <h2>Carrito: {cart.length} productos</h2>
      <h3>Total: ${total.toLocaleString("es-CO")}</h3>

      <button onClick={vaciarCarrito}>
        Vaciar Carrito
      </button>
    </div>
  )
}

export default App
