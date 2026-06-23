function ProductGallery() {
  return (
    <div style={styles.container}>

      {/* thumbnails */}
      <div style={styles.thumbs}>
        <div style={styles.thumb}>Thumb</div>
        <div style={styles.thumb}>Thumb</div>
        <div style={styles.thumb}>Thumb</div>
      </div>

      {/* main image */}
      <div style={styles.main}>
        Main Product Image
      </div>

    </div>
  )
}

const styles: React.CSSProperties = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  thumbs: {
    display: "flex",
    gap: "10px"
  },
  thumb: {
    width: "60px",
    height: "60px",
    border: "1px solid #ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  main: {
    width: "250px",
    height: "300px",
    border: "1px solid #ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}

export default ProductGallery