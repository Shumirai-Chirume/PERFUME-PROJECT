function RecentActivity() {
  return (
    <div style={styles.container}>

      <h3>Recent Activity Ledger</h3>

      <div style={styles.row}>
  <div style={styles.id}>#VOILE9482</div>

  <div>June 2026</div>

  <div style={{ color: getStatusColor("processing") }}>
    Processing
  </div>

  <div>$120.00</div>
</div>

<div style={styles.row}>
  <div style={styles.id}>#VOILE5821</div>

  <div>April 2026</div>

  <div style={{ color: getStatusColor("processing") }}>
    Shipped
  </div>

  <div>$95.00</div>
</div>

    <div style={styles.row}>
  <div style={styles.id}>#VOILE3344</div>

  <div>January 2026</div>

  <div style={{ color: getStatusColor("processing") }}>
    Delivered
  </div>

  <div>$180.00</div>
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
    padding: "12px 16px",
    borderBottom: "1px solid var(--champagne)",
    backgroundColor: "white",
    transition: "0.2s ease"
  },

  id: {
    fontWeight: 600
  },

  status: {
    fontSize: "13px"
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "processing":
      return "var(--neutral-grey)"
    case "shipped":
      return "var(--gold)"
    case "delivered":
      return "var(--success-green)"
    default:
      return "var(--neutral-grey)"
  }
}

export default RecentActivity