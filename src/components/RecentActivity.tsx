function RecentActivity() {
  return (
    <div style={styles.container}>

      <h3>Recent Activity Ledger</h3>

      <div style={styles.row}>
        <p>#VOILE9482</p>
        <p>June 2026</p>
        <p>Processing</p>
        <p>$120</p>
      </div>

      <div style={styles.row}>
        <p>#VOILE5821</p>
        <p>April 2026</p>
        <p>Shipped</p>
        <p>$95</p>
      </div>

      <div style={styles.row}>
        <p>#VOILE3344</p>
        <p>January 2026</p>
        <p>Delivered</p>
        <p>$180</p>
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

  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    border: "1px solid #eee"
  }
}

export default RecentActivity