import { Link } from "react-router-dom";

function HomeTopNav() {
  return (
    <div style={styles.container}>
      
      {/* Block 1 */}
      <div style={styles.block}>
        <Link to="/login" style={styles.link}>
          Login
        </Link>
      </div>


      {/* Block 2 */}
      <div style={styles.block}>

        <Link to="/products" style={styles.link}>
          Shop
        </Link>

        <span>|</span>

        <Link to="/about" style={styles.link}>
          About
        </Link>

        <span>|</span>

        <Link to="/journal" style={styles.link}>
          Journal
        </Link>

      </div>


      {/* Block 3 */}
      <div style={styles.block}>

        <Link to="/search" style={styles.link}>
          Search
        </Link>

        <span>|</span>

        <Link to="/profile" style={styles.link}>
          Account
        </Link>

        <span>|</span>

        <Link to="/cart" style={styles.link}>
          Cart
        </Link>

      </div>

    </div>
  )
}


const styles: any = {

  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 20px",
    borderBottom: "1px solid #ddd"
  },


  block: {
    display: "flex",
    gap: "10px",
    fontSize: "14px",
    alignItems: "center"
  },


  link: {
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer"
  }

}


export default HomeTopNav;