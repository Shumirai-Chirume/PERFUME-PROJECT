import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetailsPanel from "../components/ProductDetailsPanel";
import Footer from "../components/Footer";
import { getProductById } from "../api";


function ProductDetails(){


const { id } = useParams();


const [product,setProduct] = useState<any>(null);

const [loading,setLoading] = useState(true);



useEffect(()=>{


if(id){

getProductById(id)
.then((data)=>{

setProduct(data);

setLoading(false);

});


}


},[id]);



if(loading){

return (

<h1 style={{padding:"40px"}}>

Loading product...

</h1>

)

}



if(!product){

return (

<h1 style={{padding:"40px"}}>

Product Not Found

</h1>

)

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

)


}



const styles:any={


wrapper:{

display:"flex",

justifyContent:"center",

alignItems:"center",

width:"100%",

minHeight:"500px"

}


}



export default ProductDetails;