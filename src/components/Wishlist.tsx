function Wishlist() {
  return (
    <div style={styles.container}>

      <h3>Curated Private Wishlist</h3>

      <div style={styles.card}>
        <h4>Velvet Oud</h4>
        <button>Quick Add To Bag</button>
      </div>

      <div style={styles.card}>
        <h4>Golden Amber</h4>
        <button>Quick Add To Bag</button>
      </div>

    </div>
  )
}

const styles: any = {
  container: {
    flex: 1,
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },

  card: {
    border: "1px solid #eee",
    padding: "15px"
  }
}

export default Wishlist