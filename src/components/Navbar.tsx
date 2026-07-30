import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {

  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);



  useEffect(() => {

    const checkScreen = () => {
      setMobile(window.innerWidth <= 768);
    };


    checkScreen();


    window.addEventListener(
      "resize",
      checkScreen
    );


    return () => {
      window.removeEventListener(
        "resize",
        checkScreen
      );
    };

  }, []);




  const closeMenu = () => {
    setOpen(false);
  };



  return (

    <nav style={styles.nav}>


      <div style={styles.logo}>
        PERFUMEHUB
      </div>



      {
        mobile && (

          <button
            style={styles.menuButton}
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

        )
      }




      {
        (!mobile || open) && (

          <div style={{
            ...styles.links,
            ...(mobile ? styles.mobileMenu : {})
          }}>


            <Link style={styles.link} to="/" onClick={closeMenu}>
              Home
            </Link>


            <Link style={styles.link} to="/products" onClick={closeMenu}>
              Products
            </Link>


            <Link style={styles.link} to="/cart" onClick={closeMenu}>
              Cart
            </Link>


            <Link style={styles.link} to="/checkout" onClick={closeMenu}>
              Checkout
            </Link>


            <Link style={styles.link} to="/login" onClick={closeMenu}>
              Login
            </Link>


            <Link style={styles.link} to="/register" onClick={closeMenu}>
              Register
            </Link>


            <Link style={styles.link} to="/dashboard" onClick={closeMenu}>
              Dashboard
            </Link>


            <Link style={styles.link} to="/profile" onClick={closeMenu}>
              Profile
            </Link>


            <Link style={styles.link} to="/order-history" onClick={closeMenu}>
              Order History
            </Link>


          </div>

        )
      }


    </nav>

  );

}




const styles:any = {


nav:{

position:"fixed",

top:0,

left:0,

right:0,

height:"60px",

display:"flex",

alignItems:"center",

justifyContent:"space-between",

padding:"0 20px",

backgroundColor:"#C8A97E",

zIndex:1000,

borderBottom:"1px solid var(--champagne)"

},



logo:{

fontFamily:"var(--heading-font)",

fontWeight:700,

fontSize:"20px"

},



links:{

display:"flex",

gap:"20px",

alignItems:"center"

},



mobileMenu:{

position:"absolute",

top:"60px",

left:0,

right:0,

display:"flex",

flexDirection:"column",

gap:"20px",

padding:"25px",

backgroundColor:"#C8A97E"

},



link:{

color:"var(--charcoal)",

fontSize:"15px",

fontWeight:500

},



menuButton:{

display:"block",

background:"transparent",

border:"none",

fontSize:"28px",

cursor:"pointer"

}


};



export default Navbar;