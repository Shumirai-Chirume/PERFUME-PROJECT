import dolce from "../assets/dolce.webp"
import pink from "../assets/pink.avif"
import rPerfume from "../assets/R.jpeg"


function ShipmentManifestReview() {


  const items = [
    {
      name: "Dolce Rose",
      qty: 1,
      price: "$120",
      status: "Processing",
      image: dolce
    },
    {
      name: "Pink Velvet",
      qty: 1,
      price: "$95",
      status: "Shipped",
      image: pink
    },
    {
      name: "Royal Essence",
      qty: 1,
      price: "$180",
      status: "Delivered",
      image: rPerfume
    }
  ]



  const handleDeepDive = (item:any) => {

    alert(
`Shipment Details

Product: ${item.name}
Quantity: ${item.qty}
Price: ${item.price}
Status: ${item.status}
`
    )

  }



  const handleInvoice = (item:any) => {


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
`


    const blob = new Blob(
      [invoice],
      {type:"text/plain"}
    )


    const url = URL.createObjectURL(blob)


    const link = document.createElement("a")

    link.href = url
    link.download = `${item.name}-invoice.txt`

    link.click()


    URL.revokeObjectURL(url)

  }



  const handleReorder = (item:any) => {

    alert(
      `${item.name} has been added to your reorder request`
    )

  }




  return (

    <div style={styles.container}>


      <h3>
        Granular Shipment Manifest Review
      </h3>



      {items.map((item,index)=>(


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
              onClick={() => handleDeepDive(item)}
            >
              View Data Deep Dive
            </button>



            <button
              style={styles.button}
              onClick={() => handleInvoice(item)}
            >
              Get Invoice PDF
            </button>



            <button
              style={styles.button}
              onClick={() => handleReorder(item)}
            >
              Reorder
            </button>



          </div>


        </div>


      ))}


    </div>

  )

}



const styles:any = {


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
  backgroundColor:"white",
  boxShadow:"var(--shadow-card)"
},


thumb:{
  width:"50px",
  height:"50px",
  borderRadius:"var(--radius-sm)",
  backgroundSize:"cover",
  backgroundPosition:"center",
  backgroundRepeat:"no-repeat",
  boxShadow:"var(--shadow-card)"
},


sub:{
  fontSize:"12px",
  color:"var(--charcoal)"
},



button:{
  backgroundColor:"white",
  color:"var(--rich-black)",
  border:"1px solid var(--gold)",
  padding:"8px 12px",
  borderRadius:"var(--radius-sm)",
  cursor:"pointer",
  fontWeight:500
},


actions:{
  display:"flex",
  gap:"8px",
  flexWrap:"wrap"
}


}



export default ShipmentManifestReview