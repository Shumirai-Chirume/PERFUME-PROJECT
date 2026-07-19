import { useCart } from "../context/CartContext";

function ProductDetailsPanel() {
  const { addToCart } = useCart();

  return (
    <div style={styles.container}>

      <h2>CHANCE CHANEL</h2>

      <p>$150.99</p>

      <div>
        <p>Scent Profile (sweet / fresh / floral)</p>
      </div>

      <div>
        <p>size: 10 oz</p>
      </div>

     <button
  style={styles.button}
  onClick={() =>
    addToCart({
      id: "chance-chanel",
      name: "CHANCE CHANEL",
      size: "10 oz",
      scent: "Sweet / Fresh / Floral",
      price: 150.99
    })
  }
  onMouseEnter={(e) =>
    (e.currentTarget.style.backgroundColor = "var(--gold-dark)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.backgroundColor = "var(--gold)")
  }
>
  Add to Bag
</button>

      <div>
        <p>
          A fragrance that is strongly sweet yet delicately fresh with a hint of floral notes
        </p>
      </div>

      <div>
        <p>Notes / Ingredients (Accordion)</p>
      </div>

    </div>
  );
}

const styles: any = {
  container: {
    width: "300px",
    padding: "20px",
    border: "1px solid #C8A97E",
    borderRadius: "8px"
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
};

export default ProductDetailsPanel;