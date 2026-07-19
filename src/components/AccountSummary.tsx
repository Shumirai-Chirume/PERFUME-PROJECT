function AccountSummary() {
  return (
    <div style={styles.container}>

      <div style={styles.card}>
  <div style={styles.label}>Membership Level</div>
  <div style={styles.value}>
    Gold Member
  </div>
</div>

      <div style={styles.card}>
  <div style={styles.label}>Reward Balance</div>
  <div style={styles.value}>
    1,250 Points
  </div>
</div>

    </div>
  )
}

const styles: any = {
  container: {
    flex: 1,
    display: "flex",
    gap: "15px",
    backgroundColor: "var(--champagne)",
    borderRadius: "var(--radius-sm)",
    padding: "16px"
  },

  card: {
    padding: "16px",
    borderRadius: "var(--radius-sm)",
    border: "1px solid var(--champagne)",
    backgroundColor: "white",
    transition: "0.2s ease"
  },

  label: {
    fontSize: "12px",
    color: "var(--charcoal)",
    marginBottom: "6px",
    fontFamily: "var(--heading-font)",
    fontWeight: 600
  },

  value: {
    fontSize: "16px",
    fontWeight: 600,
    color: "var(--rich-black)"
  }
}

export default AccountSummary