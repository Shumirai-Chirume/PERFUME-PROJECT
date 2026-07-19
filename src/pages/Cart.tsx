import { useNavigate } from "react-router-dom";
import CartPageNav from "../components/CartPageNav";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import type { CartItemType } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
const navigate = useNavigate();

  return (
    <section className="section">
      <div className="container">

        <div style={styles.page}>

          <CartPageNav />

          <h2 style={styles.title}>Your Bag</h2>

          <div style={styles.container}>

            <div style={styles.lineItems}>
              <h3>Line Items</h3>

              {cartItems.length === 0 ? (
                <p>Your bag is empty.</p>
              ) : (
                cartItems.map((item: CartItemType) => (
                  <CartItem
                    key={item.id}
                    name={item.name}
                    scent={item.scent}
                    price={item.price}
                    quantity={item.quantity}
                    remove={() => removeFromCart(item.id)}
                    updateQuantity={(qty: number) =>
                      updateQuantity(item.id, qty)
                    }
                  />
                ))
              )}

            </div>

            <div style={styles.summary}>
              <h3>Summary</h3>

              <p>Shipping Estimate</p>
              <input placeholder="Promo Code" />

              <h4>
                Total: ${getCartTotal().toFixed(2)}
              </h4>

              <button 
  style={styles.button}
  onClick={() => navigate("/checkout")}
>
  Checkout
</button>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </section>
  )
}

function CartItem({ name, scent, price, quantity, remove, updateQuantity }: any) {
  return (
    <div style={styles.item}>

      <div style={styles.details}>
        <h4 style={styles.productName}>
          {name}
        </h4>

        <p style={styles.scent}>
          {scent}
        </p>
      </div>

      <div style={styles.qty}>
        Qty:

        <button onClick={() => updateQuantity(quantity - 1)}>
          -
        </button>

        {quantity}

        <button onClick={() => updateQuantity(quantity + 1)}>
          +
        </button>
      </div>

      <div style={styles.priceSection}>
        <p>${price}</p>

        <span 
          style={styles.remove}
          onClick={remove}
        >
          Remove
        </span>
      </div>

    </div>
  )
}

const styles: any = {
  page: {
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  },

  title: {
    textAlign: "center",
    color: "var(--rich-black)",
    margin: 0
  },

  container: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "48px",
    alignItems: "start"
  },

  lineItems: {
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  },

  summary: {
    border: "1px solid var(--champagne)",
    borderRadius: "var(--radius-md)",
    padding: "20px",
    backgroundColor: "white"
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    border: "1px solid var(--champagne)",
    borderRadius: "var(--radius-md)",
    padding: "16px",
    backgroundColor: "white",
    boxShadow: "var(--shadow-card)"
  },

  button: {
    backgroundColor: "var(--gold)",
    color: "white",
    border: "none",
    borderRadius: "var(--radius-sm)",
    padding: "12px 20px",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "0.2s ease",
    width: "100%"
  },

  details: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "8px"
  },

  productName: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 500,
    color: "var(--rich-black)"
  },

  scent: {
    margin: 0,
    color: "var(--neutral-grey)"
  },

  qty: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: 500
  },

  priceSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: "8px"
  },

  remove: {
    fontSize: "14px",
    color: "var(--gold)",
    cursor: "pointer"
  }
}

export default Cart