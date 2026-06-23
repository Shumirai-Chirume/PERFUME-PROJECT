import ProductCard from "./ProductCard"

function YouMayAlsoLike() {
  return (
    <section style={styles.section}>
      <h2>You May Also Like</h2>

      <div style={styles.grid}>
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
    marginTop: "40px"
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap"
  }
}

export default YouMayAlsoLike