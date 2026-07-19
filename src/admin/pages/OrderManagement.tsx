import AdminSidebar from "../components/AdminSidebar"

function OrderManagement() {
  return (
    <div style={styles.page}>

      <AdminSidebar />

      <main style={styles.mainContent}>

        {/* TOP BAR */}
        <div style={styles.topbar}>

          <input
            placeholder="Search orders..."
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
            Order & Fulfillment Logistics Center
          </h1>

          <div style={styles.grid}>

            {/* LEFT TABLE */}
            <div style={styles.tableCard}>

              <div style={styles.tableHeader}>
                <span>Invoice ID</span>
                <span>Client</span>
                <span>Total Volume</span>
                <span>Status</span>
              </div>

              <div style={styles.row}>
                <span>#ORD-9482</span>
                <span>Eleanor Vance</span>
                <span>$395</span>
                <span style={styles.delivered}>Delivered</span>
              </div>

              <div style={styles.row}>
                <span>#ORD-7721</span>
                <span>James Carter</span>
                <span>$210</span>
                <span style={styles.processing}>Processing</span>
              </div>

              <div style={styles.row}>
                <span>#ORD-6603</span>
                <span>Sophia Lee</span>
                <span>$540</span>
                <span style={styles.shipped}>Shipped</span>
              </div>

            </div>

            {/* RIGHT PANEL */}
            <div style={styles.sidePanel}>

              <div style={styles.card}>
                <h3>Active Ledger Context</h3>

                <p><strong>Shipping Destination Code</strong></p>
                <p>ZN-LUS-00421</p>

                <p><strong>Address</strong></p>
                <p>
                  12 Prestige Avenue, Longacres, Lusaka, Zambia
                </p>
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
    gridTemplateColumns: "1.5fr 1.5fr 1fr 1fr",
    fontWeight: 600,
    paddingBottom: "12px",
    borderBottom: "1px solid #eee",
    marginBottom: "10px"
  },

  row: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1.5fr 1fr 1fr",
    padding: "12px 0",
    borderBottom: "1px solid #f5f5f5"
  },

  sidePanel: {
    display: "flex",
    flexDirection: "column"
  },

  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "var(--radius-md)",
    boxShadow: "var(--shadow-card)",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },

  delivered: {
    color: "green",
    fontWeight: 600
  },

  processing: {
    color: "orange",
    fontWeight: 600
  },

  shipped: {
    color: "#1e88e5",
    fontWeight: 600
  }
}

export default OrderManagement