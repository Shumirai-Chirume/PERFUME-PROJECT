function CheckoutForm() {
  return (
    <div style={styles.container}>

      <h3>Contact</h3>
      <input placeholder="Email" style={styles.input} />

      <div style={styles.row}>
        <input placeholder="First Name" style={styles.input} />
        <input placeholder="Last Name" style={styles.input} />
      </div>

      <input placeholder="Address" style={styles.input} />

      <div style={styles.row}>
        <input placeholder="City" style={styles.input} />
        <input placeholder="Postal Code" style={styles.input} />
        <input placeholder="Country" style={styles.input} />
      </div>

      <h3>Shipping Method</h3>
      <p>Standard / Express</p>

      <h3>Payment Method</h3>
      <p>Card / Wallet</p>

      <div style={styles.row}>
        <input placeholder="Card Number" style={styles.input} />
        <input placeholder="Expiry" style={styles.input} />
        <input placeholder="CVC" style={styles.input} />
      </div>

      <button style={styles.button}>
        Place Order
      </button>

    </div>
  )
}

const styles: any = {
  container: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },

  row: {
    display: "flex",
    gap: "10px"
  },

  input: {
    padding: "10px",
    border: "1px solid #ccc",
    flex: 1
  },

  button: {
    padding: "12px",
    marginTop: "10px"
  }
}

export default CheckoutForm