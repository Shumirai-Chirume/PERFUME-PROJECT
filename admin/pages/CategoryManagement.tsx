import AdminSidebar from "../components/AdminSidebar"

function CategoryManagement() {
  return (
    <div style={styles.page}>

      <AdminSidebar />

      <main style={styles.mainContent}>

        {/* TOP BAR */}
        <div style={styles.topbar}>
          <input
            placeholder="Search..."
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
            Category Architecture Layout
          </h1>

          <div style={styles.grid}>

            {/* LEFT TABLE */}
            <div style={styles.tableCard}>

              <div style={styles.tableHeader}>
                <span>Taxonomy Group</span>
                <span>Inventory Count</span>
                <span>Status</span>
              </div>

              <div style={styles.row}>
                <span>Woody & Earthy Matrix</span>
                <span>420 SKUs</span>
                <span style={styles.active}>Active</span>
              </div>

              <div style={styles.row}>
                <span>Warm Florals Heritage</span>
                <span>312 SKUs</span>
                <span style={styles.active}>Active</span>
              </div>

              <div style={styles.row}>
                <span>Fresh Citrus Line</span>
                <span>180 SKUs</span>
                <span style={styles.inactive}>Inactive</span>
              </div>

            </div>

            {/* RIGHT PANEL */}
            <div style={styles.sidePanel}>

              <div style={styles.card}>
                <h3>Create Group Node</h3>
                <input
                  placeholder="Category Variant Label"
                  style={styles.input}
                />

                <button style={styles.button}>
                  Publish Taxonomy Node
                </button>
              </div>

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
    gridTemplateColumns: "2fr 1fr",
    gap: "24px"
  },

  tableCard: {
    backgroundColor: "white",
    borderRadius: "var(--radius-md)",
    padding: "20px",
    boxShadow: "var(--shadow-card)"
  },

  tableHeader: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    fontWeight: 600,
    paddingBottom: "12px",
    borderBottom: "1px solid #eee",
    marginBottom: "10px"
  },

  row: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    padding: "12px 0",
    borderBottom: "1px solid #f5f5f5"
  },

  sidePanel: {
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  },

  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "var(--radius-md)",
    boxShadow: "var(--shadow-card)",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  input: {
    height: "56px",
    borderRadius: "8px",
    border: "1px solid rgba(18,18,18,0.12)",
    padding: "0 12px"
  },

  button: {
    backgroundColor: "var(--gold)",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer"
  },

  active: {
    color: "green",
    fontWeight: 600
  },

  inactive: {
    color: "red",
    fontWeight: 600
  }
}

export default CategoryManagement