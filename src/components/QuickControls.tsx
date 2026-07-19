import { useNavigate } from "react-router-dom";

function QuickControls() {

  const navigate = useNavigate();


  return (
    <div style={styles.container}>

      <button
        style={styles.button}
        onClick={() => navigate("/order-history")}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--gold)"
          e.currentTarget.style.backgroundColor = "var(--champagne)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--champagne)"
          e.currentTarget.style.backgroundColor = "white"
        }}
      >
        View All Orders
      </button>


      <button
        style={styles.button}
        onClick={() => navigate("/profile")}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--gold)"
          e.currentTarget.style.backgroundColor = "var(--champagne)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--champagne)"
          e.currentTarget.style.backgroundColor = "white"
        }}
      >
        Edit My Profile
      </button>


      <button
        style={styles.button}
        onClick={() => navigate("/shipment")}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--gold)"
          e.currentTarget.style.backgroundColor = "var(--champagne)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--champagne)"
          e.currentTarget.style.backgroundColor = "white"
        }}
      >
        Check Running Shipment
      </button>


      <button
        style={styles.button}
        onClick={() => navigate("/products")}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--gold)"
          e.currentTarget.style.backgroundColor = "var(--champagne)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--champagne)"
          e.currentTarget.style.backgroundColor = "white"
        }}
      >
        Continue Shopping
      </button>


    </div>
  )
}


const styles: any = {
 container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    border: "1px solid var(--champagne)",
    borderRadius: "10px",
    backgroundColor: "white"
  },

  button: {
    padding: "12px 16px",
    borderRadius: "var(--radius-sm)",
    border: "1px solid var(--champagne)",
    backgroundColor: "white",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 500,
    transition: "0.2s ease",
    width: "100%",
    textAlign: "left"
  },


  left: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },

  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "var(--champagne)",
    border: "2px solid var(--gold)"
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },

  select: {
    padding: "10px",
    border: "1px solid var(--champagne)",
    borderRadius: "var(--radius-sm)",
    backgroundColor: "white",
    cursor: "pointer"
  },

  bell: {
    fontSize: "22px",
    padding: "8px",
    borderRadius: "var(--radius-sm)",
    cursor: "pointer",
    backgroundColor: "var(--champagne)"
  }

}

export default QuickControls