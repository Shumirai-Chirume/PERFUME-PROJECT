import { useCart } from "../context/CartContext";
import dolce from "../assets/dolce.webp";
import pink from "../assets/pink.avif";
import rPerfume from "../assets/R.jpeg";

const products = [
  {
    id: "dolce-rose",
    name: "Dolce Rose",
    price: 120,
    scent: "Floral & Elegant",
    size: "100ml",
    image: dolce
  },
  {
    id: "pink-velvet",
    name: "Pink Velvet",
    price: 99,
    scent: "Sweet & Soft",
    size: "100ml",
    image: pink
  },
  {
    id: "royal-essence",
    name: "Royal Essence",
    price: 140,
    scent: "Bold & Woody",
    size: "100ml",
    image: rPerfume
  }
];

function ProductCard() {
  const { addToCart } = useCart();

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          style={styles.card}
        >
          <div
            style={{
              ...styles.image,
              backgroundImage: `url(${product.image})`
            }}
          ></div>

          <h3 style={styles.name}>{product.name}</h3>

          <p style={styles.price}>${product.price}</p>

          <button
            className="btn btn-primary"
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                scent: product.scent,
                size: product.size,
                image: product.image
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </>
  );
}

const styles: any = {
  card: {
    width: "260px",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    backgroundColor: "white",
    borderRadius: "var(--radius-md)",
    boxShadow: "var(--shadow-card)",
    transition: "400ms cubic-bezier(0.16, 1, 0.3, 1)",
    cursor: "pointer"
  },

  image: {
    height: "320px",
    borderRadius: "var(--radius-md)",
    background: "linear-gradient(160deg, #F5EFE6, #EAE3D5)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    boxShadow: "var(--shadow-card)"
  },

  name: {
    margin: 0,
    fontFamily: "var(--heading-font)",
    color: "var(--rich-black)",
    fontSize: "20px",
    fontWeight: 500
  },

  price: {
    margin: 0,
    color: "var(--charcoal)",
    fontWeight: 400
  }
};

export default ProductCard;