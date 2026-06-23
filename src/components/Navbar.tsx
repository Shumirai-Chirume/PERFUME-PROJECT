import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav style={styles.nav}>

      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/order-history">Order History</Link>
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
    padding: "0 20px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "grey",
    zIndex: 1000
  },

  links: {
    display: "flex",
    gap: "20px",
    justifyContent: "flex-start"
  }
}

export default Navbar