import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.links}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/products">Products</Link>
        <Link style={styles.link} to="/cart">Cart</Link>
        <Link style={styles.link} to="/checkout">Checkout</Link>
        <Link style={styles.link} to="/login">Login</Link>
        <Link style={styles.link} to="/register">Register</Link>
        <Link style={styles.link} to="/dashboard">Dashboard</Link>
        <Link style={styles.link} to="/profile">Profile</Link>
        <Link style={styles.link} to="/order-history">Order History</Link>
      </div>
    </nav>
  )
}

const styles: any = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 20px",
    borderBottom: "1px solid var(--grey)",
    backgroundColor: "#C8A97E",
    backdropFilter: "blur(8px)",
    zIndex: 1000
  },

  links: {
    display: "flex",
    gap: "20px",
    justifyContent: "flex-start"
  },

  link: {
    color: "var(--charcoal)",
    fontSize: "15px",
    fontWeight: 500,
    letterSpacing: "0.3px",
    transition: "0.2s ease"
  }
}

export default Navbar