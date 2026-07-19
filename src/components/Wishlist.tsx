import { useCart } from "../context/CartContext";


function Wishlist() {

  const { addToCart } = useCart();



  const velvetOud = {

    id: "101",
    name:"Velvet Oud",
    scent:"Woody • Oriental",
    price:120,
    size:"100ml"

  };



  const goldenAmber = {

    id:"102",
    name:"Golden Amber",
    scent:"Warm • Sweet • Amber",
    price:95,
    size:"100ml"

  };



  return (

    <div style={styles.container}>


      <h3>
        Curated Private Wishlist
      </h3>



      <div style={styles.card}>


        <h4 className="product-title">
          Velvet Oud
        </h4>


        <button
          className="btn btn-primary"
          onClick={() => addToCart(velvetOud)}
        >
          Quick Add To Bag
        </button>


      </div>




      <div style={styles.card}>


        <h4 className="product-title">
          Golden Amber
        </h4>


        <button
          className="btn btn-primary"
          onClick={() => addToCart(goldenAmber)}
        >
          Quick Add To Bag
        </button>


      </div>


    </div>

  )
}




const styles:any = {


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