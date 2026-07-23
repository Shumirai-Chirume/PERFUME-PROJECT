import { useCart } from "../context/CartContext";
import { useState } from "react";

interface Props {
  product: any;
}

function ProductDetailsPanel({ product }: Props) {

  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);


  const handleAdd = () => {

    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);

  };


  return (

    <div style={styles.container}>


      <div style={styles.imageContainer}>

        <img
          src={product.image}
          alt={product.name}
          style={styles.image}
        />

      </div>



      <div style={styles.details}>


        <h1>
          {product.name}
        </h1>


        <h2>
          ${product.price}
        </h2>


        <p>
          Scent Profile:
          <br/>
          {product.scent}
        </p>


        <p>
          Size:
          <br/>
          {product.size}
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



const styles:any = {


container:{

display:"flex",

justifyContent:"center",

alignItems:"center",

gap:"50px",

width:"900px",

backgroundColor:"white",

padding:"40px",

borderRadius:"var(--radius-md)",

boxShadow:"var(--shadow-card)"

},



imageContainer:{

width:"350px",

height:"450px",

borderRadius:"var(--radius-md)",

overflow:"hidden",

backgroundColor:"#f5efe6"

},



image:{

width:"100%",

height:"100%",

objectFit:"cover"

},



details:{

display:"flex",

flexDirection:"column",

gap:"15px",

width:"350px"

},



button:{

color:"white",

border:"none",

padding:"14px 25px",

borderRadius:"var(--radius-sm)",

fontWeight:600,

cursor:"pointer",

transition:"0.3s ease"

},



description:{

lineHeight:"1.6",

color:"gray"

}


}


export default ProductDetailsPanel;