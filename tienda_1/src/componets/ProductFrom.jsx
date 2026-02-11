function ProductForm({
  name,
  price,
  category,
  setName,
  setPrice,
  setCategory,
  onAdd
}) {
  return (
    <>
      <h2>Agregar Producto</h2>

      <input
        type="text"
        placeholder="Nombre del producto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="text"
        placeholder="Categoría"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button onClick={onAdd}>Agregar Producto</button>
    </>
  )
}

export default ProductForm
