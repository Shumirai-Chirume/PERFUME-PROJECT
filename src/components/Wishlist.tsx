import { useState } from "react";
import { useCart } from "../context/CartContext";
import AddToCartButton from "./AddToCartButton";


function Wishlist() {


const { addToCart } = useCart();



const [wishlist] = useState<any[]>(()=>{


const saved =
localStorage.getItem("wishlist");



return saved
? JSON.parse(saved)
: [];


});




return(


<div style={styles.container}>


<h3>
Curated Private Wishlist
</h3>




{
wishlist.length === 0 ?


<p>
Your wishlist is empty.
</p>



:


wishlist.map((item)=>(


<div
key={item.id}
style={styles.card}
>


<h4 className="product-title">

{item.name}

</h4>



<p>
{item.scent}
</p>



<p>
${item.price}
</p>




<AddToCartButton

onAdd={()=>addToCart({

id:String(item.id),

name:item.name,

scent:item.scent,

price:Number(item.price),

size:item.size || "100ml",

image:item.image

})}

>

Quick Add To Bag

</AddToCartButton>



</div>


))


}



</div>


)

}





const styles:any={


container:{

flex:1,

border:"1px solid var(--champagne)",

borderRadius:"var(--radius-md)",

padding:"20px",

display:"flex",

flexDirection:"column",

gap:"15px",

backgroundColor:"white",

boxShadow:"var(--shadow-card)"

},



card:{

padding:"14px",

border:"1px solid var(--champagne)",

borderRadius:"var(--radius-sm)",

backgroundColor:"white",

display:"flex",

flexDirection:"column",

gap:"10px"

}



}



export default Wishlist;