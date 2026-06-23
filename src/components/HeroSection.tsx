function HeroSection() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <h1>Discover Your Signature Scent</h1>
        <p>Luxury perfumes crafted for every mood</p>
        <button>Shop Collection</button>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    height: "300px",
    backgroundColor: "#ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  overlay: {
    textAlign: "center"
  }
}

export default HeroSection