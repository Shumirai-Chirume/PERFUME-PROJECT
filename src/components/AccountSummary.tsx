function AccountSummary() {
  return (
    <div style={styles.container}>

      <div style={styles.card}>
        <h3>Membership Level</h3>
        <p>Gold Member</p>
      </div>

      <div style={styles.card}>
        <h3>Reward Balance</h3>
        <p>2,500 Points</p>
      </div>

    </div>
  )
}

const styles: any = {
  container: {
    flex: 1,
    display: "flex",
    gap: "15px"
  },

  card: {
    borderRadius: "6px",
    padding: "16px",
    border: "1px solid #e5e4e7",
  }
}

export default AccountSummary