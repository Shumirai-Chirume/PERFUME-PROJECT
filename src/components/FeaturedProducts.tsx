import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../api";
import type { Product } from "../api";


function FeaturedProducts() {

  const [products, setProducts] = useState<Product[]>([]);


  useEffect(() => {

    async function loadProducts() {

      const data = await getProducts();

      setProducts(data.slice(0, 4));

    }


    loadProducts();

  }, []);



  return (

    <section style={styles.section}>

      <h2>
        Featured Products
      </h2>


      <div style={styles.container}>

        {
          products.map((product) => (

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

  section: {

    textAlign: "center" as const,

    padding: "20px"

  },


  container: {

    display: "flex" as const,

    justifyContent: "center",

    gap: "15px",

    flexWrap: "wrap" as const,

    marginTop: "15px"

  }

};



export default FeaturedProducts;