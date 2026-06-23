import ProductCard from "./ProductCard"

function FeaturedProducts() {
  return (
    <section style={styles.section}>
      <h2>Featured Products</h2>

      <div style={styles.container}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  )
}

const styles: React.CSSProperties = {
  section: {
    textAlign: "center",
    padding: "20px"
  },
  container: {
    display: "flex",
    justifyContent: "center", // 👈 THIS centers the row
    gap: "15px",
    flexWrap: "wrap",
    marginTop: "15px"
  }
}

export default FeaturedProducts