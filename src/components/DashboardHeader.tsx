function DashboardHeader() {
  return (
    <div style={styles.container}>

      <div style={styles.left}>
        <div style={styles.avatar}></div>

        <div>
          <h3>Welcome back, Mason Guest</h3>
        </div>
      </div>

      <div style={styles.right}>
        <select style={styles.select}>
          <option>My Account</option>
          <option>Dashboard</option>
          <option>Profile Settings</option>
          <option>Order History</option>
          <option>Logout</option>
        </select>

        <div style={styles.bell}>
          🔔
        </div>
      </div>

    </div>
  )
}

const styles: any = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px"
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },

  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#ccc"
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },

  select: {
    padding: "10px"
  },

  bell: {
    fontSize: "22px"
  }
}

export default DashboardHeader