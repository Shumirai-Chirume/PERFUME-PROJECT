import { useNavigate } from "react-router-dom";
import { saveOrder } from "../api";
import { useCart } from "../context/CartContext";

function CheckoutForm() {

  const { cartItems, clearCart } = useCart();

  const navigate = useNavigate();


  const handlePlaceOrder = () => {

    const order = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      customer: "Customer",
      phone: "",
      address: "Address entered",
      city: "City entered",
      method: "Card",
      amount: cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
      status: "Pending",
      items: cartItems
    };


    saveOrder(order);

    clearCart();


    alert("Order placed successfully!");


    navigate("/order-history");

  };


  return (
    <div style={styles.container}>

      <h3>Contact</h3>

      <input 
        placeholder="Email" 
        style={styles.input} 
      />


      <div style={styles.row}>

        <input 
          placeholder="First Name" 
          style={styles.input} 
        />

        <input 
          placeholder="Last Name" 
          style={styles.input} 
        />

      </div>


      <input 
        placeholder="Address" 
        style={styles.input} 
      />


      <div style={styles.row}>

        <input 
          placeholder="City" 
          style={styles.input} 
        />

        <input 
          placeholder="Postal Code" 
          style={styles.input} 
        />

        <input 
          placeholder="Country" 
          style={styles.input} 
        />

      </div>



      <h3>Shipping Method</h3>

      <p className="label">
        Standard / Express
      </p>



      <h3>Payment Method</h3>

      <p className="label">
        Card / Wallet
      </p>



      <div style={styles.row}>

        <input 
          placeholder="Card Number" 
          style={styles.input} 
        />

        <input 
          placeholder="Expiry" 
          style={styles.input} 
        />

        <input 
          placeholder="CVC" 
          style={styles.input} 
        />

      </div>



      <button
        style={styles.button}
        onClick={handlePlaceOrder}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--gold-dark)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--gold)")
        }
      >
        Place Order
      </button>


    </div>
  )
}



const styles: any = {

  container: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },


  row: {
    display: "flex",
    gap: "10px"
  },


  input: {
    padding: "10px",
    border: "1px solid #ccc",
    flex: 1
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
    transition: "0.2s ease"
  }

}


export default CheckoutForm;