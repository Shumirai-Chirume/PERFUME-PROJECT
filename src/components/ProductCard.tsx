import { useCart } from "../context/CartContext";
import AddToCartButton from "./AddToCartButton";
import type { Product } from "../api";


interface ProductCardProps {
  product: Product;
}


function ProductCard({ product }: ProductCardProps) {

  const { addToCart } = useCart();


  return (

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
      />


      <h3 style={styles.name}>
        {product.name}
      </h3>


      <p style={styles.price}>
        ${product.price}
      </p>


      <p>
        {product.scent}
      </p>



      <AddToCartButton

        onAdd={() =>
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

      </AddToCartButton>



    </div>

  );

}



const styles:any={


card:{

width:"260px",

padding:"16px",

display:"flex",

flexDirection:"column",

gap:"12px",

backgroundColor:"white",

borderRadius:"var(--radius-md)",

boxShadow:"var(--shadow-card)",

transition:"400ms cubic-bezier(0.16,1,0.3,1)",

cursor:"pointer"

},



image:{

height:"320px",

borderRadius:"var(--radius-md)",

background:"linear-gradient(160deg,#F5EFE6,#EAE3D5)",

backgroundSize:"cover",

backgroundPosition:"center",

backgroundRepeat:"no-repeat",

boxShadow:"var(--shadow-card)"

},



name:{

margin:0,

fontFamily:"var(--heading-font)",

color:"var(--rich-black)",

fontSize:"20px",

fontWeight:500

},



price:{

margin:0,

color:"var(--charcoal)",

fontWeight:400

}


}



export default ProductCard;