import CheckoutSteps from "../components/CheckoutSteps"
import CheckoutForm from "../components/CheckoutForm"
import OrderSummary from "../components/OrderSummary"
import Footer from "../components/Footer"

function Checkout() {
  return (
    <section className="section">
      <div className="container">

        <div style={styles.page}>

          <CheckoutSteps />

          <div style={styles.container}>
            <CheckoutForm />
            <OrderSummary />
          </div>

        </div>

      </div>
      <Footer />
    </section>
  )
}

const styles: any = {
  page: {
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  },

  container: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: "48px",
    alignItems: "start"
  }
}

export default Checkout