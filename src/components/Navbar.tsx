import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [open, setOpen] = useState(false);


  const closeMenu = () => {
    setOpen(false);
  };


  return (
    <nav style={styles.nav}>


      <div style={styles.logo}>
        PERFUMEHUB
      </div>



      <button
        style={styles.menuButton}
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>



      <div
        style={{
          ...styles.links,
          ...(open ? styles.mobileOpen : {})
        }}
      >

        <Link 
          style={styles.link} 
          to="/"
          onClick={closeMenu}
        >
          Home
        </Link>


        <Link 
          style={styles.link} 
          to="/products"
          onClick={closeMenu}
        >
          Products
        </Link>


        <Link 
          style={styles.link} 
          to="/cart"
          onClick={closeMenu}
        >
          Cart
        </Link>


        <Link 
          style={styles.link} 
          to="/checkout"
          onClick={closeMenu}
        >
          Checkout
        </Link>


        <Link 
          style={styles.link} 
          to="/login"
          onClick={closeMenu}
        >
          Login
        </Link>


        <Link 
          style={styles.link} 
          to="/register"
          onClick={closeMenu}
        >
          Register
        </Link>


        <Link 
          style={styles.link} 
          to="/dashboard"
          onClick={closeMenu}
        >
          Dashboard
        </Link>


        <Link 
          style={styles.link} 
          to="/profile"
          onClick={closeMenu}
        >
          Profile
        </Link>


        <Link 
          style={styles.link} 
          to="/order-history"
          onClick={closeMenu}
        >
          Order History
        </Link>


      </div>


    </nav>
  );
}



const styles:any = {


nav: {

position:"fixed",

top:0,

left:0,

right:0,

height:"60px",

display:"flex",

alignItems:"center",

justifyContent:"space-between",

padding:"0 20px",

borderBottom:"1px solid var(--champagne)",

backgroundColor:"#C8A97E",

zIndex:1000

},



logo:{

fontFamily:"var(--heading-font)",

fontWeight:700,

fontSize:"20px",

color:"var(--rich-black)"

},



links:{

display:"flex",

gap:"20px",

alignItems:"center"

},



link:{

color:"var(--charcoal)",

fontSize:"15px",

fontWeight:500,

letterSpacing:"0.3px"

},



menuButton:{

display:"none",

border:"none",

background:"transparent",

fontSize:"28px",

cursor:"pointer",

color:"var(--rich-black)"

},



mobileOpen:{

position:"absolute",

top:"60px",

left:0,

right:0,

display:"flex",

flexDirection:"column",

alignItems:"center",

gap:"18px",

padding:"25px",

backgroundColor:"#C8A97E",

borderBottom:"1px solid var(--champagne)"

}

};

export default Navbar;