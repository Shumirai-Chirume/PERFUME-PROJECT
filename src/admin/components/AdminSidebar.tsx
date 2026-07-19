import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function AdminSidebar() {
  const [showLogout, setShowLogout] = useState(false)
  const navigate = useNavigate();

  return (
    <>
      <aside style={styles.sidebar}>

        <div style={styles.logoSection}>
          <h2 style={styles.logo}>
            Perfume Hub Core
          </h2>
        </div>

        <nav style={styles.nav}>

          <Link to="/admin/dashboard" style={{ textDecoration: "none" }}>
            <div style={styles.navItem}>Dashboard Overview</div>
          </Link>

          <Link to="/admin/products" style={{ textDecoration: "none" }}>
            <div style={styles.navItem}>Product Management</div>
          </Link>

          <Link to="/admin/categories" style={{ textDecoration: "none" }}>
            <div style={styles.navItem}>Category Management</div>
          </Link>

          <Link to="/admin/orders" style={{ textDecoration: "none" }}>
            <div style={styles.navItem}>Order Management</div>
          </Link>

          <Link to="/admin/customers" style={{ textDecoration: "none" }}>
            <div style={styles.navItem}>Customer Management</div>
          </Link>

          <Link to="/admin/reports" style={{ textDecoration: "none" }}>
            <div style={styles.navItem}>Reports</div>
          </Link>

          <Link to="/admin/settings" style={{ textDecoration: "none" }}>
            <div style={styles.navItem}>Settings</div>
          </Link>

        </nav>

        {/* LOGOUT BUTTON */}
        <div
          style={styles.navItem}
          onClick={() => setShowLogout(true)}
        >
          Log Out Workspace
        </div>

      </aside>

      {/* ================= LOGOUT MODAL ================= */}
      {showLogout && (
        <div style={styles.overlay} onClick={() => setShowLogout(false)}>

          <div
            style={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >

            <h2>Confirm Logout</h2>

            <p>
              Are you sure you want to logout from Perfume Hub Core?
            </p>

            <div style={styles.modalButtons}>

              <button
                style={styles.cancelBtn}
                onClick={() => setShowLogout(false)}
              >
                Cancel
              </button>

              <button
  style={styles.logoutBtn}
  onClick={() => {
    localStorage.removeItem("perfume_user");
    setShowLogout(false);
    navigate("/login");
  }}
>
  Yes, Logout
</button>

            </div>

          </div>

        </div>
      )}
    </>
  )
}

const styles: any = {
  sidebar: {
    width: "280px",
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    backgroundColor: "#C8A97E",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "32px 20px",
    borderRight: "1px solid rgba(255,255,255,0.06)",
    zIndex: 1000
  },

  logoSection: {
    marginBottom: "40px"
  },

  logo: {
    fontSize: "28px",
    color: "white",
    margin: 0,
    lineHeight: 1.2
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    flex: 1
  },

  navItem: {
    padding: "14px 16px",
    borderRadius: "var(--radius-md)",
    cursor: "pointer",
    transition: "300ms cubic-bezier(0.16, 1, 0.3, 1)",
    color: "black",
    fontWeight: 500
  },

  /* ===== MODAL STYLES ===== */

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000
  },

  modal: {
    width: "360px",
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "24px",
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(0,0,0,0.2)"
  },

  modalButtons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px"
  },

  cancelBtn: {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "white",
    cursor: "pointer"
  },

  logoutBtn: {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#C8A97E",
    color: "white",
    cursor: "pointer"
  }
}

export default AdminSidebar