import { useNavigate } from "react-router-dom";


function ScentDiagnosis() {


const navigate = useNavigate();



const profile = JSON.parse(

localStorage.getItem(
"user_profile_settings"
) || "null"

);



const preferredScent =

profile?.favoriteScentNotes

?

profile.favoriteScentNotes

:

"Fresh floral notes";





const frequency =

profile?.frequencyPreference

?

profile.frequencyPreference

:

"Daily elegance";





return (

<div style={styles.container}>


<h3>
AI-Driven Personalized Scent Diagnosis
</h3>



<div style={styles.cards}>


<div style={styles.card}>


<div style={styles.title}>
Your Signature Recommendation
</div>



<div style={styles.scent}>

Based on your profile:
<br/>

{preferredScent}

</div>



<button

style={styles.button}

onClick={()=>navigate("/scent-finder")}

onMouseEnter={(e)=>
(e.currentTarget.style.backgroundColor="var(--gold-dark)")
}

onMouseLeave={(e)=>
(e.currentTarget.style.backgroundColor="var(--gold)")
}

>

Explore Scent

</button>



</div>





<div style={styles.card}>


<div style={styles.title}>

Usage Profile

</div>



<div style={styles.scent}>

Preferred Frequency:

<br/>

{frequency}

</div>




<button

style={styles.button}

onClick={()=>navigate("/scent-finder")}

onMouseEnter={(e)=>
(e.currentTarget.style.backgroundColor="var(--gold-dark)")
}

onMouseLeave={(e)=>
(e.currentTarget.style.backgroundColor="var(--gold)")
}

>

Update Diagnosis

</button>



</div>



</div>


</div>

)

}





const styles:any={


container:{

border:"1px solid #ddd",

borderRadius:"var(--radius-sm)",

backgroundColor:"var(--champagne)",

padding:"16px"

},



cards:{

display:"grid",

gridTemplateColumns:"1fr 1fr",

gap:"20px"

},



card:{

padding:"16px",

border:"1px solid var(--champagne)",

borderRadius:"var(--radius-sm)",

backgroundColor:"white",

display:"flex",

flexDirection:"column",

gap:"10px"

},



title:{

fontWeight:600

},



scent:{

fontSize:"13px",

color:"var(--charcoal)",

fontFamily:"var(--heading-font)",

fontWeight:600

},



button:{

marginTop:"10px",

backgroundColor:"var(--gold)",

color:"white",

border:"none",

padding:"8px 12px",

borderRadius:"var(--radius-sm)",

cursor:"pointer"

}



}



export default ScentDiagnosis;