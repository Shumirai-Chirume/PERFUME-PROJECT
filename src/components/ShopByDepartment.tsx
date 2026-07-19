import { useNavigate } from "react-router-dom";
import childrenPerfume from "../assets/children-perfume.jpg"
import menPerfume from "../assets/men-perfume.webp"

function ShopByDepartment() {

  const navigate = useNavigate();

  return (
    <section style={styles.container}>

      <h2>Shop by Department</h2>

      <div style={styles.grid}>


        <div
          style={{
            ...styles.card,
            backgroundImage:
              "linear-gradient(rgba(18,18,18,0.35), rgba(18,18,18,0.35)), url(https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80)"
          }}

          onClick={() => navigate("/products?category=women")}
        >

          <div style={styles.overlay}>

            <h3 style={styles.cardTitle}>
              Women’s Perfume
            </h3>

            <p style={styles.cardText}>
              Floral, Sweet, Citrus Collections
            </p>

          </div>

        </div>



        <div
          style={{
            ...styles.card,
            backgroundImage:
            `linear-gradient(rgba(18,18,18,0.35), rgba(18,18,18,0.35)), url(${menPerfume})`
          }}

          onClick={() => navigate("/products?category=men")}
        >

          <div style={styles.overlay}>

            <h3 style={styles.cardTitle}>
              Men’s Perfume
            </h3>

            <p style={styles.cardText}>
              Woody, Spicy, Fresh, Masculine Scents
            </p>

          </div>

        </div>



        <div
          style={{
            ...styles.card,
            backgroundImage:
            `linear-gradient(rgba(18,18,18,0.35), rgba(18,18,18,0.35)), url(${childrenPerfume})`
          }}

          onClick={() => navigate("/products?category=children")}
        >

          <div style={styles.overlay}>

            <h3 style={styles.cardTitle}>
              Children’s Perfume
            </h3>

            <p style={styles.cardText}>
              Gentle, Alcohol-Free, Clean Notes
            </p>

          </div>

        </div>


      </div>

    </section>
  )
}


const styles: any = {

  container: {
    textAlign: "center",
    padding: "60px 40px",
    backgroundColor: "var(--champagne)",
    borderRadius: "var(--radius-md)"
  },


  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "24px",
    marginTop: "30px",
    flexWrap: "nowrap"
  },


  card: {
    flex: 1,
    maxWidth: "320px",
    height: "420px",

    borderRadius: "var(--radius-md)",

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    overflow: "hidden",

    display: "flex",
    alignItems: "flex-end",

    boxShadow: "var(--shadow-card)",

    cursor: "pointer",

    transition:
      "400ms cubic-bezier(0.16, 1, 0.3, 1)"
  },


  overlay: {
    width: "100%",
    padding: "24px",
    background:
      "linear-gradient(transparent, rgba(0,0,0,0.75))",
    textAlign: "left"
  },


  cardTitle: {
    color: "white",
    marginBottom: "8px"
  },


  cardText: {
    color: "rgba(255,255,255,0.85)"
  }

}


export default ShopByDepartment