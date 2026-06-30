import AdminSidebar from "../components/AdminSidebar"

function Settings() {
  return (
    <div style={styles.page}>

      <AdminSidebar />

      <main style={styles.mainContent}>

        {/* TOPBAR */}
        <div style={styles.topbar}>
          <input
            placeholder="Search settings..."
            style={styles.search}
          />

          <div style={styles.profile}>
            <div style={styles.icon}>🔔</div>
            <div style={styles.icon}>💬</div>

            <div style={styles.user}>
              <div style={styles.avatar}></div>
              <div>
                <div style={styles.name}>Admin User</div>
                <div style={styles.role}>Master System Overseer</div>
              </div>
            </div>

          </div>

        </div>

        {/* CONTENT */}
        <section style={styles.content}>

          <h1 style={styles.title}>
            Mason Settings Workspace Portal
          </h1>

          {/* PROFILE CARD */}
          <div style={styles.card}>

            <div style={styles.identityRow}>

              <div style={styles.avatarLarge}>A</div>

              <div>
                <h3>Admin Identity Parameters</h3>
                <p>Avatar Asset + Identity Mapping</p>
              </div>

            </div>

            <input
              placeholder="Alternate Identity Address Asset Link Map"
              style={styles.input}
            />

            <div style={styles.rowGrid}>

              <input placeholder="First Name" style={styles.input} />
              <input placeholder="Last Name" style={styles.input} />

            </div>

            <input
              placeholder="Contact Email"
              style={styles.input}
            />

            <input
              placeholder="Mason Identity Access Tier"
              style={styles.input}
            />

            <div style={styles.bottomRow}>
              <button style={styles.button}>
                Update Profile Settings
              </button>
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

  content: {
    padding: "32px"
  },

  title: {
    marginBottom: "24px"
  },

  card: {
    backgroundColor: "white",
    padding: "24px",
    borderRadius: "var(--radius-md)",
    boxShadow: "var(--shadow-card)",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  identityRow: {
    display: "flex",
    alignItems: "center",
    gap: "16px"
  },

  avatarLarge: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "var(--gold)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    color: "white"
  },

  input: {
    height: "56px",
    borderRadius: "8px",
    border: "1px solid rgba(18,18,18,0.12)",
    padding: "0 12px",
    backgroundColor: "white"
  },

  rowGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px"
  },

  bottomRow: {
    display: "flex",
    justifyContent: "flex-end"
  },

  button: {
    backgroundColor: "var(--gold)",
    color: "white",
    border: "none",
    padding: "12px 18px",
    borderRadius: "8px",
    cursor: "pointer"
  }
}

export default Settings