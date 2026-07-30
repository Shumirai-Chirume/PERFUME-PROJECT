import ProductCard from "./ProductCard";

function YouMayAlsoLike() {


  const products = [
    {
      id: "1",
      name: "Velvet Oud",
      price: 120,
      size: "100ml",
      scent: "Woody • Oriental",
      image: "",
      category: "men" as const
    },

    {
      id: "2",
      name: "Golden Amber",
      price: 95,
      size: "100ml",
      scent: "Warm • Sweet • Amber",
      image: "",
      category: "women" as const
    },

    {
      id: "3",
      name: "Royal Essence",
      price: 180,
      size: "100ml",
      scent: "Luxury Floral",
      image: "",
      category: "women" as const
    },

    {
      id: "4",
      name: "Noir Intense",
      price: 119,
      size: "100ml",
      scent: "Dark • Spicy",
      image: "",
      category: "men" as const
    }
  ];



  return (

    <section style={styles.section}>

      <h2>
        You May Also Like
      </h2>



      <div style={styles.grid}>

        {
          products.map((product)=>(
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        }

      </div>


    </section>

  );

}



const styles = {

  section:{
    textAlign:"center" as const,
    marginTop:"40px"
  },


  grid:{
    display:"flex",
    justifyContent:"center",
    gap:"15px",
    flexWrap:"wrap" as const
  }

};



export default YouMayAlsoLike;