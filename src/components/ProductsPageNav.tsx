import { Link } from "react-router-dom";

function ProductsPageNav() {

  return (

    <div style={styles.container}>


      {/* LOGIN */}
      <div style={styles.block}>

        <Link
          to="/login"
          style={styles.link}
        >
          Login
        </Link>

      </div>



      {/* MAIN LINKS */}
      <div style={styles.block}>


        <Link
          to="/products"
          style={styles.link}
        >
          Shop
        </Link>


        <Link
          to="/about"
          style={styles.link}
        >
          About
        </Link>


        <Link
          to="/journal"
          style={styles.link}
        >
          Journal
        </Link>


      </div>




      {/* CUSTOMER ACTIONS */}
      <div style={styles.block}>


        <Link
          to="/search"
          style={styles.link}
        >
          Search
        </Link>


        <Link
          to="/profile"
          style={styles.link}
        >
          Account
        </Link>


        <Link
          to="/cart"
          style={styles.link}
        >
          Cart
        </Link>


      </div>



    </div>

  )

}



const styles:any={


container:{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"15px 20px",
borderBottom:"1px solid #ddd",
backgroundColor:"white"
},



block:{
display:"flex",
gap:"15px",
alignItems:"center"
},



link:{
textDecoration:"none",
color:"var(--charcoal)",
fontSize:"14px",
fontWeight:500,
cursor:"pointer",
transition:"0.2s ease"
}


}



export default ProductsPageNav;