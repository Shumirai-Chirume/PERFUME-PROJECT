function QuickControls() {
  return (
    <div style={styles.container}>

      <button>View All Orders</button>
      <button>Edit My Profile</button>
      <button>Check Running Shipment</button>
      <button>Continue Shopping</button>

    </div>
  )
}

const styles: any = {
  container: {
    flex: 1,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px"
  }
}

export default QuickControls