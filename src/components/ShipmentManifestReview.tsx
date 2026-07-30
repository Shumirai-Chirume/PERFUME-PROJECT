import { getOrders } from "../api";


function ShipmentManifestReview() {


const orders = getOrders();



const items = orders.flatMap((order:any)=>
  order.items?.map((item:any)=>({

    name:item.name,

    qty:item.quantity,

    price:`$${item.price}`,

    status:order.status || "Processing",

    image:item.image || ""

  })) || []

);




const handleDeepDive = (item:any)=>{


alert(
`Shipment Details

Product: ${item.name}

Quantity: ${item.qty}

Price: ${item.price}

Status: ${item.status}
`
);


};




const handleInvoice = (item:any)=>{


const invoice =
`PerfumeHub Invoice

Product:
${item.name}

Quantity:
${item.qty}

Price:
${item.price}

Shipment Status:
${item.status}
`;



const blob =
new Blob(
[invoice],
{type:"text/plain"}
);



const url =
URL.createObjectURL(blob);



const link =
document.createElement("a");


link.href=url;

link.download=
`${item.name}-invoice.txt`;


link.click();


URL.revokeObjectURL(url);


};




const handleReorder=(item:any)=>{

alert(
`${item.name} added to reorder request`
);

};





return (

<div style={styles.container}>


<h3>
Granular Shipment Manifest Review
</h3>



{
items.length === 0 ?

<p>
No shipments found.
</p>


:

items.map((item,index)=>(


<div
key={index}
style={styles.item}
>


<div
style={{
...styles.thumb,
backgroundImage:`url(${item.image})`
}}
/>



<div>

<div>
{item.name}
</div>


<div style={styles.sub}>
Qty: {item.qty}
</div>


</div>



<div>
{item.price}
</div>


<div>
{item.status}
</div>



<div style={styles.actions}>


<button
style={styles.button}
onClick={()=>handleDeepDive(item)}
>
View Data Deep Dive
</button>


<button
style={styles.button}
onClick={()=>handleInvoice(item)}
>
Get Invoice PDF
</button>


<button
style={styles.button}
onClick={()=>handleReorder(item)}
>
Reorder
</button>


</div>



</div>


))

}


</div>

)

}



const styles:any={

container:{
border:"1px solid var(--champagne)",
padding:"20px",
borderRadius:"var(--radius-md)",
display:"flex",
flexDirection:"column",
gap:"12px",
backgroundColor:"white"
},


item:{
display:"grid",
gridTemplateColumns:"60px 2fr 1fr 1fr 3fr",
gap:"12px",
alignItems:"center",
padding:"14px",
border:"1px solid var(--champagne)",
borderRadius:"var(--radius-md)",
backgroundColor:"white"
},


thumb:{
width:"50px",
height:"50px",
borderRadius:"var(--radius-sm)",
backgroundSize:"cover",
backgroundPosition:"center"
},


sub:{
fontSize:"12px"
},


button:{
backgroundColor:"white",
border:"1px solid var(--gold)",
padding:"8px 12px",
borderRadius:"var(--radius-sm)",
cursor:"pointer"
},


actions:{
display:"flex",
gap:"8px",
flexWrap:"wrap"
}


}



export default ShipmentManifestReview;