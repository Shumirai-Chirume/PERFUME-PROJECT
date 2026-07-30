import { useState } from "react";
import { useCart } from "../context/CartContext";

interface Props {
  product: any;
}

function ProductDetailsPanel({ product }: Props) {

  const [added, setAdded] = useState(false);

  const { addToCart } = useCart();

  const handleAdd = () => {

    addToCart({

      id: String(product.id),

      name: product.name,

      price: Number(product.price),

      scent: product.category?.name || "Luxury",

      size: "100ml",

      image: product.image_url

    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);

  };

  return (

    <div style={styles.container}>

      <div style={styles.imageContainer}>

        <img
          src={product.image_url}
          alt={product.name}
          style={styles.image}
        />

      </div>

      <div style={styles.details}>

        <h1>
          {product.name}
        </h1>

        <h2>
          ${Number(product.price).toFixed(2)}
        </h2>

        <p>
          Category:
          <br />
          {product.category?.name}
        </p>

        <p>
          Stock Available:
          <br />
          {product.stock_quantity}
        </p>

        <button
          style={{
            ...styles.button,
            backgroundColor:
              added
                ? "#4CAF50"
                : "var(--gold)"
          }}
          onClick={handleAdd}
        >

          {
            added
              ? "Added ✓"
              : "Add to Bag"
          }

        </button>

        <p style={styles.description}>
          {product.description ||
            "A luxurious fragrance crafted with premium notes designed to create a memorable signature scent."}
        </p>

      </div>

    </div>

  );

}

const styles: any = {

  container: {

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    gap: "50px",

    width: "900px",

    backgroundColor: "white",

    padding: "40px",

    borderRadius: "var(--radius-md)",

    boxShadow: "var(--shadow-card)"

  },

  imageContainer: {

    width: "350px",

    height: "450px",

    borderRadius: "var(--radius-md)",

    overflow: "hidden",

    backgroundColor: "#f5efe6"

  },

  image: {

    width: "100%",

    height: "100%",

    objectFit: "cover"

  },

  details: {

    display: "flex",

    flexDirection: "column",

    gap: "15px",

    width: "350px"

  },

  button: {

    color: "white",

    border: "none",

    padding: "14px 25px",

    borderRadius: "var(--radius-sm)",

    fontWeight: 600,

    cursor: "pointer",

    transition: "0.3s ease"

  },

  description: {

    lineHeight: "1.6",

    color: "gray"

  }

};

export default ProductDetailsPanel;