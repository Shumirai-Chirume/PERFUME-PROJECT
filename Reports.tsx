import AdminSidebar from "../components/AdminSidebar"

function Reports() {
  return (
    <div style={styles.page}>

      <AdminSidebar />

      <main style={styles.mainContent}>

        {/* TOPBAR */}
        <div style={styles.topbar}>

          <input
            placeholder="Search reports..."
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
            Strategic System Analytical Insights
          </h1>

          <div style={styles.grid}>

            {/* CARD 1 */}
            <div style={styles.card}>
              <h3>Top Performing Node</h3>
              <p>Chanel – Bleu de Chanel</p>
              <p style={styles.stat}>Revenue: $120,000</p>
            </div>

            {/* CARD 2 */}
            <div style={styles.card}>
              <h3>High Velocity Segment Accords</h3>
              <p>Woody & Earthy Oud Base</p>
              <p style={styles.stat}>Conversion: 8.4%</p>
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

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px"
  },

  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "var(--radius-md)",
    boxShadow: "var(--shadow-card)"
  },

  stat: {
    marginTop: "10px",
    fontWeight: 600
  }
}

export default Reports