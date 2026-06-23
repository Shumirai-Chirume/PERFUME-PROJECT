function OrderSummary() {
  return (
    <div style={styles.container}>

      <h3>Order Summary</h3>

      <div style={styles.items}>
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
      </div>

      <p>Subtotal</p>
      <p>Shipping</p>
      <h4>Total</h4>

    </div>
  )
}

const styles: any = {
  container: {
    width: "30%",
    border: "1px solid #ddd",
    padding: "20px"
  },

  items: {
    marginBottom: "20px"
  }
}

export default OrderSummary