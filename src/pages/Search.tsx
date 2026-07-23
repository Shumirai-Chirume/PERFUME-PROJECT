import { useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import products from "../data/products";


function Search() {


const navigate = useNavigate();

const [query,setQuery]=useState("");



const filteredProducts =
products.filter(product =>
product.name
.toLowerCase()
.includes(query.toLowerCase())
);



return (

<div style={styles.page}>


<h1>
Search Perfumes
</h1>



<input

placeholder="Search by perfume name..."

value={query}

onChange={(e)=>setQuery(e.target.value)}

style={styles.search}

/>



<div style={styles.results}>


{
filteredProducts.length > 0 ? (


filteredProducts.map((product,index)=>(


<div
key={index}
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


)

:(

<p>
No perfumes found
</p>

)

}


</div>



<Footer />


</div>

)


}



const styles:any={


page:{

padding:"40px",

display:"flex",

flexDirection:"column",

alignItems:"center",

gap:"25px"

},



search:{

width:"400px",

height:"45px",

padding:"0 15px",

borderRadius:"var(--radius-md)",

border:"1px solid var(--champagne)"

},



results:{

display:"grid",

gridTemplateColumns:"repeat(3,1fr)",

gap:"25px",

width:"80%"

},



card:{

backgroundColor:"white",

padding:"20px",

borderRadius:"var(--radius-md)",

boxShadow:"var(--shadow-card)",

textAlign:"center"

},



image:{

width:"200px",

height:"250px",

objectFit:"cover",

borderRadius:"var(--radius-md)"

},



button:{

backgroundColor:"var(--gold)",

color:"white",

border:"none",

padding:"10px 20px",

borderRadius:"var(--radius-sm)",

cursor:"pointer"

}


}



export default Search;