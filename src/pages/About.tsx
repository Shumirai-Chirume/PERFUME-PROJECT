import Footer from "../components/Footer"

function About(){

return(

<div style={styles.page}>


<h1>Our Story</h1>


<p>
Perfume Hub is a luxury fragrance house built around
identity, memory and personal expression.
</p>


<p>
We curate timeless fragrances inspired by elegance,
craftsmanship and modern individuality.
</p>


<Footer />


</div>

)

}


const styles:any={

page:{
padding:"60px",
backgroundColor:"#faf8f4",
minHeight:"100vh"
}

}


export default About