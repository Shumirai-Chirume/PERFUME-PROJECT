function AddressDirectory() {
  return (
    <div style={styles.container}>

      <div style={styles.card}>
        Primary Shipping Address
        <button>Modify</button>
      </div>

      <div style={styles.card}>
        Billing Address (Same as Shipping)
        <button>Modify</button>
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
    gap: "16px"
  },

  card: {
    flex: 1,
    border: "1px solid #eee",
    padding: "12px"
  }
}

export default AddressDirectory