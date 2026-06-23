function HomeTopNav() {
  return (
    <div style={styles.container}>
      
      {/* Block 1 */}
      <div style={styles.block}>
        Login
      </div>

      {/* Block 2 */}
      <div style={styles.block}>
        Shop | About | Journal
      </div>

      {/* Block 3 */}
      <div style={styles.block}>
        Search | Account | Cart
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
  block: {
    display: "flex",
    gap: "10px",
    fontSize: "14px"
  }
}

export default HomeTopNav