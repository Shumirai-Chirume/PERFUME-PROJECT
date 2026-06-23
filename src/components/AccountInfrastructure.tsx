function AccountInfrastructure() {
  return (
    <div style={styles.container}>

      <h3>Account Infrastructure</h3>

      <div style={styles.item}>Passcode Updates →</div>
      <div style={styles.item}>Notifications: Enabled</div>
      <div style={styles.item}>Privacy Controls →</div>

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
    padding: "10px",
    border: "1px solid #eee"
  }
}

export default AccountInfrastructure