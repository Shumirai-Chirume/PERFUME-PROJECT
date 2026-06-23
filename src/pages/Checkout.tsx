import CheckoutSteps from "../components/CheckoutSteps"
import CheckoutForm from "../components/CheckoutForm"
import OrderSummary from "../components/OrderSummary"

function Checkout() {
  return (
    <div>

      <CheckoutSteps />

      <div style={styles.container}>
        <CheckoutForm />
        <OrderSummary />
      </div>

    </div>
  )
}

const styles: any = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    padding: "20px"
  }
}

export default Checkout