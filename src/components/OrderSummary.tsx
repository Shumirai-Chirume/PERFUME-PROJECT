import { useCart } from "../context/CartContext";

function OrderSummary() {
  const { cartItems, getCartTotal } = useCart();

  return (
    <div style={styles.container}>

      <h3>Order Summary</h3>

      <div style={styles.items}>
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map((item) => (
            <p key={item.id}>
              {item.name} x {item.quantity} - ${item.price * item.quantity}
            </p>
          ))
        )}
      </div>

      <p>
        Subtotal: ${getCartTotal().toFixed(2)}
      </p>

      <p>
        Shipping: $0
      </p>

      <h4>
        Total: ${getCartTotal().toFixed(2)}
      </h4>

    </div>
  )
}

const styles: any = {
  container: {
    width: "30%",
    border: "1px solid #ddd",
    padding: "20px"
  },

  items: {
    marginBottom: "20px"
  }
}

export default OrderSummary