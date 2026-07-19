import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>

        <h1 style={styles.heading}>
  Discover Your Signature Scent
</h1>
 <p style={styles.heading}>
  Luxury perfumes crafted for every mood
</p>

        <div style={styles.buttons}>
         <button
  className="btn btn-primary"
  onClick={() => navigate("/products")}
>
  Shop Collection
</button>
        </div>

      </div>
    </section>
  )
}

const styles: any = {
 hero: {
  minHeight: "700px",
  backgroundImage:
    "linear-gradient(rgba(18,18,18,0.45), rgba(18,18,18,0.45)), url('https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80')",

  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "80px 20px"
},

  overlay: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    color: "white"
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px"
  },

  heading: {
  color: "white"
}
}

export default HeroSection