function BrandStory() {
  return (
    <section style={styles.container}>
      <div style={styles.image}>Image</div>

      <div>
        <h2>Our Heritage</h2>
        <p>
          We source the finest ingredients to create timeless fragrances
          focused on sustainability and craftsmanship.
        </p>
      </div>
    </section>
  )
}

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "20px"
  },
  image: {
    width: "200px",
    height: "150px",
    backgroundColor: "#ccc"
  }
}

export default BrandStory