function ProductsPageNav() {
  return (
    <div style={styles.container}>
      
      <div style={styles.logo}>
        Logo
      </div>

      <div style={styles.nav}>
        Shop / About / Journal
      </div>

      <div style={styles.cart}>
        Search / Account / Cart
      </div>

    </div>
  )
}

const styles: React.CSSProperties = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 20px",
    borderBottom: "1px solid #ddd"
  },
  logo: {},
  nav: {
    display: "flex",
    gap: "10px"
  },
  cart: {
    display: "flex",
    gap: "10px"
  }
}

export default ProductsPageNav