function ProductDetailsPanel() {
  return (
    <div style={styles.container}>

      <h2>Name + Size</h2>

      <p>Price</p>

      <div>
        <p>Scent Profile (Top / Heart / Base)</p>
      </div>

      <div>
        <p>Size Selector</p>
      </div>

      <button>Add to Bag</button>

      <div>
        <p>Description (Accordion)</p>
      </div>

      <div>
        <p>Notes / Ingredients (Accordion)</p>
      </div>

    </div>
  )
}

const styles: React.CSSProperties = {
  container: {
    width: "300px",
    padding: "20px",
    border: "1px solid #ddd"
  }
}

export default ProductDetailsPanel