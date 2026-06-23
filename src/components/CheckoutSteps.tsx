function CheckoutSteps() {
  return (
    <div style={styles.container}>
      <p>Perfume Hub → Shipping → Payment → Review</p>
    </div>
  )
}

const styles: any = {
  container: {
    textAlign: "center",
    padding: "20px",
    borderBottom: "1px solid #ddd"
  }
}

export default CheckoutSteps