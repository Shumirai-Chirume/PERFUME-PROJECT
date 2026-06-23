function ShipmentManifestReview() {
  return (
    <div style={styles.container}>

      <h3>Granular Shipment Manifest Review</h3>

      <div style={styles.item}>

        <div style={styles.thumb}></div>

        <div>
          <div>Velvet Oud</div>
          <div style={styles.sub}>Qty: 1</div>
        </div>

        <div>$120</div>

        <div>Processing</div>

        <button>View Data Deep Dive</button>
        <button>Invoice PDF</button>
        <button>Reorder</button>

      </div>

      <div style={styles.item}>

        <div style={styles.thumb}></div>

        <div>
          <div>Amber Noir</div>
          <div style={styles.sub}>Qty: 1</div>
        </div>

        <div>$95</div>

        <div>Shipped</div>

        <button>View Data Deep Dive</button>
        <button>Invoice PDF</button>
        <button>Reorder</button>

      </div>

      <div style={styles.item}>

        <div style={styles.thumb}></div>

        <div>
          <div>Royal Saffron</div>
          <div style={styles.sub}>Qty: 1</div>
        </div>

        <div>$180</div>

        <div>Delivered</div>

        <button>View Data Deep Dive</button>
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
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  item: {
    display: "grid",
    gridTemplateColumns: "60px 2fr 1fr 1fr 2fr",
    gap: "12px",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #eee"
  },

  thumb: {
    width: "50px",
    height: "50px",
    backgroundColor: "#ddd",
    borderRadius: "4px"
  },

  sub: {
    fontSize: "12px",
    color: "#666"
  }
}

export default ShipmentManifestReview