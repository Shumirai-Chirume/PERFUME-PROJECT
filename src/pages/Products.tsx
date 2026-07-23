import { useNavigate } from "react-router-dom";
import ProductsPageNav from "../components/ProductsPageNav";
import Footer from "../components/Footer";
import products from "../data/products";


function Products() {

  const navigate = useNavigate();


  return (

    <div>

      <ProductsPageNav />


      <section className="section">

        <div className="container">


          <h1 style={styles.title}>
            Perfume Collection
          </h1>



          <div style={styles.grid}>


            {
              products.map((product)=>(


                <div 
                key={product.id}
                style={styles.card}
                >


                  <img
                  src={product.image}
                  style={styles.image}
                  />


                  <h3>
                    {product.name}
                  </h3>


                  <p>
                    ${product.price}
                  </p>


                  <p>
                    {product.scent}
                  </p>



                  <button

                  style={styles.button}

                  onClick={() =>
                    navigate(`/product/${product.id}`)
                  }

                  >

                    View Product

                  </button>


                </div>


              ))
            }


          </div>


        </div>

      </section>


      <Footer />


    </div>

  )

}



const styles:any={


title:{

textAlign:"center",

marginBottom:"30px"

},


grid:{

display:"grid",

gridTemplateColumns:"repeat(3,1fr)",

gap:"30px"

},


card:{

backgroundColor:"white",

padding:"20px",

borderRadius:"var(--radius-md)",

boxShadow:"var(--shadow-card)",

textAlign:"center"

},


image:{

width:"100%",

height:"300px",

objectFit:"cover",

borderRadius:"var(--radius-md)"

},


button:{

backgroundColor:"var(--gold)",

color:"white",

border:"none",

padding:"12px 20px",

borderRadius:"var(--radius-sm)",

cursor:"pointer",

fontWeight:600

}


}



export default Products;