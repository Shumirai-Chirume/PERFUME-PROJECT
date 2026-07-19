import AdminSidebar from "../components/AdminSidebar"

function CustomerManagement() {
  return (
    <div style={styles.page}>

      <AdminSidebar />

      <main style={styles.mainContent}>

        {/* TOP BAR */}
        <div style={styles.topbar}>

          <input
            placeholder="Search customers..."
            style={styles.search}
          />

          <div style={styles.profile}>
            <div style={styles.icon}>🔔</div>
            <div style={styles.icon}>💬</div>

            <div style={styles.user}>
              <div style={styles.avatar}></div>
              <div>
                <div style={styles.name}>Admin User</div>
                <div style={styles.role}>Super Admin</div>
              </div>
            </div>

          </div>

        </div>

        {/* CONTENT */}
        <section style={styles.content}>

          <h1 style={styles.title}>
            Connoisseur Profiles Matrix Registry
          </h1>

          <div style={styles.tableCard}>

            {/* HEADER */}
            <div style={styles.header}>
              <span>Client Profile</span>
              <span>Total Orders</span>
              <span>LTV</span>
              <span>Tier</span>
            </div>

            {/* ROW 1 */}
            <div style={styles.row}>
              <div>
                <div style={styles.nameText}>
                  Eleanor Vance
                </div>
                <div style={styles.email}>
                  Eleanor.Vance@LuxuryMail.com
                </div>
              </div>

              <span>14 Checkouts</span>

              <span>$4,850,000</span>

              <span style={styles.vip}>
                VIP Platinum
              </span>
            </div>

            {/* ROW 2 */}
            <div style={styles.row}>
              <div>
                <div style={styles.nameText}>
                  James Carter
                </div>
                <div style={styles.email}>
                  james.carter@mail.com
                </div>
              </div>

              <span>9 Checkouts</span>

              <span>$1,240,000</span>

              <span style={styles.gold}>
                Gold Tier
              </span>
            </div>

            {/* ROW 3 */}
            <div style={styles.row}>
              <div>
                <div style={styles.nameText}>
                  Sophia Lee
                </div>
                <div style={styles.email}>
                  sophia.lee@mail.com
                </div>
              </div>

              <span>5 Checkouts</span>

              <span>$320,000</span>

              <span style={styles.silver}>
                Silver Tier
              </span>
            </div>

          </div>

        </section>

      </main>

    </div>
  )
}

const styles: any = {
  page: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f8f8f8"
  },

  mainContent: {
    marginLeft: "280px",
    width: "100%"
  },

  topbar: {
    position: "sticky",
    top: 0,
    height: "80px",
    background: "rgba(251,251,249,0.85)",
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(26,26,26,0.05)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 32px"
  },

  search: {
    width: "320px",
    height: "50px",
    borderRadius: "var(--radius-md)",
    border: "1px solid rgba(18,18,18,0.12)",
    padding: "0 16px",
    backgroundColor: "white"
  },

  profile: {
    display: "flex",
    alignItems: "center",
    gap: "20px"
  },

  icon: {
    fontSize: "20px"
  },

  user: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },

  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "var(--gold)"
  },

  name: {
    fontWeight: 600
  },

  role: {
    fontSize: "12px",
    color: "gray"
  },

  content: {
    padding: "32px"
  },

  title: {
    marginBottom: "24px"
  },

  tableCard: {
    backgroundColor: "white",
    borderRadius: "var(--radius-md)",
    padding: "20px",
    boxShadow: "var(--shadow-card)"
  },

  header: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
    fontWeight: 600,
    paddingBottom: "12px",
    borderBottom: "1px solid #eee",
    marginBottom: "10px"
  },

  row: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
    padding: "16px 0",
    borderBottom: "1px solid #f5f5f5",
    alignItems: "center"
  },

  nameText: {
    fontWeight: 600
  },

  email: {
    fontSize: "13px",
    color: "gray"
  },

  vip: {
    color: "goldenrod",
    fontWeight: 700
  },

  gold: {
    color: "#c8a97e",
    fontWeight: 600
  },

  silver: {
    color: "#9e9e9e",
    fontWeight: 600
  }
}

export default CustomerManagement