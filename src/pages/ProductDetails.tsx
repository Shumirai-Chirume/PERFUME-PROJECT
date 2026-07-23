import { useParams } from "react-router-dom";
import ProductDetailsPanel from "../components/ProductDetailsPanel";
import Footer from "../components/Footer";
import products from "../data/products";


function ProductDetails(){

  const { id } = useParams();


  const product = products.find(
    (item) => item.id === id
  );


  if(!product){

    return (
      <h1 style={{padding:"40px"}}>
        Product Not Found
      </h1>
    );

  }


  return (

    <div>


      <section className="section">

        <div className="container">

          <div style={styles.wrapper}>

            <ProductDetailsPanel
              product={product}
            />

          </div>

        </div>

      </section>



      <Footer />


    </div>

  );

}



const styles:any = {

  wrapper:{

    display:"flex",

    justifyContent:"center",

    alignItems:"center",

    width:"100%",

    minHeight:"500px"

  }

};


export default ProductDetails;