import ProductItem from "./ProductItem"

function ProductList({ products, onDelete, onAddToCart }) {
  return (
    <ul>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onDelete={onDelete}
          onAddToCart={onAddToCart}
        />
      ))}
    </ul>
  )
}

export default ProductList
