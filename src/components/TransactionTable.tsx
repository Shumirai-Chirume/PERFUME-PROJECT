function TransactionTable() {
  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <span>ID</span>
        <span>Date</span>
        <span>Product</span>
        <span>Status</span>
        <span>Value</span>
      </div>

      <div style={styles.row}>
        <span>#VOI9482</span>
        <span>June 2026</span>
        <span>Velvet Oud</span>
        <span>Processing</span>
        <span>$120</span>
      </div>

      <div style={styles.row}>
        <span>#VOI5521</span>
        <span>April 2026</span>
        <span>Amber Noir</span>
        <span>Shipped</span>
        <span>$95</span>
      </div>

      <div style={styles.row}>
        <span>#VOI3310</span>
        <span>January 2026</span>
        <span>Royal Saffron</span>
        <span>Delivered</span>
        <span>$180</span>
      </div>

    </div>
  )
}

const styles: any = {
  container: {
    border: "1px solid #e5e4e7",
    padding: "16px",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: 600,
    borderBottom: "1px solid #eee",
    paddingBottom: "8px"
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #f0f0f0"
  }
}

export default TransactionTable