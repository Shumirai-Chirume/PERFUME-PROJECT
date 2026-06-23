function ShopByDepartment() {
  return (
    <section style={styles.container}>

      <h2>Shop by Department</h2>

      <div style={styles.grid}>

        <div style={styles.card}>
          <h3>Women’s Perfume</h3>
          <p>Floral, Sweet, Citrus Collections</p>
        </div>

        <div style={styles.card}>
          <h3>Men’s Perfume</h3>
          <p>Woody, Spicy, Fresh, Masculine Scents</p>
        </div>

        <div style={styles.card}>
          <h3>Children’s Perfume</h3>
          <p>Gentle, Alcohol-Free, Clean Notes</p>
        </div>

      </div>

    </section>
  )
}

const styles: any = {
  container: {
    textAlign: "center",
    padding: "30px"
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px"
  },

  card: {
    width: "250px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px"
  }
}

export default ShopByDepartment