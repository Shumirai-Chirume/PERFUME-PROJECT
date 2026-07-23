import { useState } from "react"


interface Props {
  onAdd: () => void
  children: string
}


function AddToCartButton({onAdd, children}:Props){

const [added,setAdded] = useState(false)



const handleClick = () => {

  onAdd()

  setAdded(true)


  setTimeout(()=>{

    setAdded(false)

  },1500)

}



return(

<button

onClick={handleClick}

style={{
...styles.button,
...(added && styles.added)
}}

onMouseEnter={(e)=>{

if(!added){

e.currentTarget.style.backgroundColor =
"var(--gold-dark)"

e.currentTarget.style.transform =
"translateY(-2px)"

}

}}


onMouseLeave={(e)=>{

if(!added){

e.currentTarget.style.backgroundColor =
"var(--gold)"

e.currentTarget.style.transform =
"translateY(0)"

}

}}


>

{added ? "Added ✓" : children}


</button>


)

}


const styles:any={


button:{

backgroundColor:"var(--gold)",

color:"white",

border:"none",

padding:"12px 18px",

borderRadius:"var(--radius-sm)",

cursor:"pointer",

fontWeight:600,

transition:"0.3s ease"

},


added:{

backgroundColor:"#2e7d32",

transform:"scale(1.05)"

}


}


export default AddToCartButton