import { useState } from "react";

function AddressDirectory() {

  const [shipping, setShipping] = useState(
    localStorage.getItem("shipping_address") ||
    "123 Luxury Street, Lusaka"
  );

  const [billing, setBilling] = useState(
    localStorage.getItem("billing_address") ||
    "Same as Shipping"
  );


  const modifyShipping = () => {

    const newAddress = prompt(
      "Enter new shipping address:",
      shipping
    );

    if (newAddress) {
      setShipping(newAddress);
      localStorage.setItem(
        "shipping_address",
        newAddress
      );
    }

  };


  const modifyBilling = () => {

    const newAddress = prompt(
      "Enter new billing address:",
      billing
    );

    if (newAddress) {
      setBilling(newAddress);
      localStorage.setItem(
        "billing_address",
        newAddress
      );
    }

  };


  return (
    <div style={styles.container}>


      <div style={styles.card}>

        <div style={styles.label}>
          Primary Shipping Address
        </div>

        <div style={styles.value}>
          {shipping}
        </div>


        <button
          style={styles.button}
          onClick={modifyShipping}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--gold-dark)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--gold)")
          }
        >
          Modify
        </button>

      </div>



      <div style={styles.card}>

        <div style={styles.label}>
          Billing Address
        </div>

        <div style={styles.value}>
          {billing}
        </div>


        <button
          style={styles.button}
          onClick={modifyBilling}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--gold-dark)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--gold)")
          }
        >
          Modify
        </button>

      </div>


    </div>
  )
}



const styles: any = {

  container: {
    border: "1px solid #e5e4e7",
    padding: "16px",
    borderRadius: "var(--radius-sm)",
    display: "flex",
    gap: "16px"
  },


  card: {
    padding: "14px",
    border: "1px solid var(--champagne)",
    borderRadius: "var(--radius-sm)",
    backgroundColor: "white",
    flex: 1
  },


  label: {
    fontSize: "12px",
    color: "var(--charcoal)",
    fontFamily: "var(--heading-font)",
    fontWeight: 600
  },


  value: {
    fontWeight: 600,
    marginTop: "4px"
  },


  button: {
    marginTop: "10px",
    backgroundColor: "var(--gold)",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "var(--radius-sm)",
    cursor: "pointer"
  }

}


export default AddressDirectory