import Footer from "../components/Footer";

function Shipment() {
  return (
    <section className="section">

      <div className="container">

        <div style={styles.page}>

          <h1 style={styles.title}>
            Shipment Tracking
          </h1>


          <div style={styles.card}>

            <h3>
              Order #12345
            </h3>

            <p>
              Status: <strong>Out for Delivery</strong>
            </p>

            <div style={styles.timeline}>

              <div>
                ✅ Order Confirmed
              </div>

              <div>
                ✅ Processing
              </div>

              <div>
                ✅ Shipped
              </div>

              <div>
                🚚 Out for Delivery
              </div>

              <div>
                ⏳ Delivered
              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </section>
  )
}


const styles:any = {

  page:{
    display:"flex",
    flexDirection:"column",
    gap:"30px"
  },


  title:{
    color:"var(--rich-black)"
  },


  card:{
    border:"1px solid var(--champagne)",
    borderRadius:"var(--radius-md)",
    padding:"25px",
    backgroundColor:"white"
  },


  timeline:{
    display:"flex",
    flexDirection:"column",
    gap:"15px",
    marginTop:"20px",
    fontSize:"16px"
  }

}


export default Shipment;