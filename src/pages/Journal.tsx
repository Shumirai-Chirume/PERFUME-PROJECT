import Footer from "../components/Footer"


function Journal(){

const articles=[

{
title:"Finding Your Signature Scent",
text:"Understanding fragrance notes and discovering perfumes that represent your identity."
},

{
title:"The Art of Luxury Perfume",
text:"Exploring the craftsmanship behind premium fragrances."
},

{
title:"Seasonal Fragrance Guide",
text:"Choosing scents that match different moods and occasions."
}

]


return(

<div style={styles.page}>


<h1>Perfume Journal</h1>


<div style={styles.grid}>

{
articles.map((item,index)=>(

<div key={index} style={styles.card}>

<h3>{item.title}</h3>

<p>{item.text}</p>


</div>

))
}


</div>


<Footer/>


</div>

)

}



const styles:any={

page:{
padding:"60px",
backgroundColor:"#faf8f4",
minHeight:"100vh"
},


grid:{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"25px"
},


card:{
backgroundColor:"white",
padding:"25px",
borderRadius:"15px",
boxShadow:"var(--shadow-card)"
}


}


export default Journal