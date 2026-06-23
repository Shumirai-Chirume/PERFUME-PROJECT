function SystemFilters() {
  return (
    <div style={styles.container}>

      <div style={styles.card}>All Transactions</div>
      <div style={styles.card}>Processing Loop</div>
      <div style={styles.card}>Dispatched Route</div>
      <div style={styles.card}>Archived / Delivered</div>

    </div>
  )
}

const styles: any = {
  container: {
    display: "flex",
    gap: "12px"
  },

  card: {
    flex: 1,
    border: "1px solid #e5e4e7",
    padding: "12px",
    borderRadius: "6px",
    textAlign: "center"
  }
}

export default SystemFilters