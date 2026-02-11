function ProductItem({ product, onDelete, onAddToCart }) {
  return (
    <li>
      <strong>{product.name}</strong>

      <span className="price">
        ${product.price.toLocaleString("es-CO")}
      </span>

      <p>{product.category}</p>

      <button onClick={() => onDelete(product.id)}>
        Eliminar
      </button>

      <button onClick={() => onAddToCart(product)}>
        Agregar
      </button>
    </li>
  )
}

export default ProductItem
