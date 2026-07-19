function ShipmentReview() {
  return (
    <div style={styles.container}>

      <div style={styles.item}>
        <div>Velvet Oud</div>
        <div>Qty: 1</div>
        <div>$120</div>
        <div>Status: Processing</div>

        <button>View Data</button>
        <button>Invoice PDF</button>
        <button>Reorder</button>
      </div>

      <div style={styles.item}>
        <div>Amber Noir</div>
        <div>Qty: 1</div>
        <div>$95</div>
        <div>Status: Shipped</div>

        <button>View Data</button>
        <button>Invoice PDF</button>
        <button>Reorder</button>
      </div>

      <div style={styles.item}>
        <div>Royal Saffron</div>
        <div>Qty: 1</div>
        <div>$180</div>
        <div>Status: Delivered</div>

        <button>View Data</button>
        <button>Invoice PDF</button>
        <button>Reorder</button>
      </div>

    </div>
  )
}

const styles: any = {
  container: {
    border: "1px solid #e5e4e7",
    padding: "16px",
    borderRadius: "var(--radius-sm)",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  item: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 2fr auto auto auto",
    gap: "10px",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #eee"
  }
}

export default ShipmentReview