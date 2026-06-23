import CartPageNav from "../components/CartPageNav"

function Cart() {
  return (
    <div>

      <CartPageNav />

      <h2 style={{ textAlign: "center", margin: "20px 0" }}>
        Your Bag
      </h2>

      <div style={styles.container}>

        {/* LEFT: Line Items */}
        <div style={styles.lineItems}>
          <h3>Line Items</h3>

          <CartItem />
          <CartItem />
          <CartItem />

        </div>

        {/* RIGHT: Summary */}
        <div style={styles.summary}>
          <h3>Summary</h3>

          <p>Shipping Estimate</p>
          <input placeholder="Promo Code" />

          <h4>Total</h4>

          <button>Checkout</button>
        </div>

      </div>

    </div>
  )
}

function CartItem() {
  return (
    <div style={styles.item}>

      <div>Image</div>

      <div>
        <p>Name + Size</p>
        <p>Scent Bar</p>
      </div>

      <div>
        Qty
      </div>

      <div>
        Price | Remove
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
  },

  lineItems: {
    width: "60%"
  },

  summary: {
    width: "30%",
    border: "1px solid #ddd",
    padding: "20px"
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid #ddd",
    padding: "10px",
    marginBottom: "10px"
  }
}

export default Cart