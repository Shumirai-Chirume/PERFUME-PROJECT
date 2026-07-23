import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function ScentFinder() {

  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState("");

  const questions = [
    {
      question: "What mood describes you best?",
      options: [
        "Elegant",
        "Fresh",
        "Romantic",
        "Bold"
      ]
    },

    {
      question: "Which scent family attracts you?",
      options: [
        "Floral",
        "Woody",
        "Sweet",
        "Spicy"
      ]
    },

    {
      question: "When will you wear your perfume?",
      options: [
        "Daily",
        "Work",
        "Date Night",
        "Special Events"
      ]
    }
  ];


  const handleAnswer = (answer:string)=>{

    const updatedAnswers=[
      ...answers,
      answer
    ];


    setAnswers(updatedAnswers);


    if(step < questions.length){

      setStep(step + 1);

    } else {

      setResult(
        `${updatedAnswers[0]} + ${updatedAnswers[1]} scent profile`
      );

    }

  };



  const restartQuiz=()=>{

    setStep(1);
    setAnswers([]);
    setResult("");

  };



  return (

<section className="section">


<div className="container">


<div style={styles.page}>


{!result ? (


<div style={styles.card}>


<h1>
Scent Finder
</h1>



<h3>
{questions[step-1].question}
</h3>



{
questions[step-1].options.map((option)=>(

<button

key={option}

style={styles.button}

onClick={()=>handleAnswer(option)}

>

{option}

</button>

))
}



<p>
Question {step} of {questions.length}
</p>


</div>



) : (



<div style={styles.card}>


<h1>
Your Perfect Match
</h1>



<p style={styles.result}>
{result}
</p>



<div style={styles.actions}>


<button

style={styles.secondaryButton}

onClick={restartQuiz}

>
Retake Quiz
</button>



<button

style={styles.button}

onClick={()=>navigate("/products")}

>
Shop Now
</button>



</div>



</div>



)}



</div>


</div>


<Footer />


</section>

)

}



const styles:any={


page:{
display:"flex",
justifyContent:"center",
alignItems:"center"
},



card:{
width:"400px",
padding:"30px",
backgroundColor:"white",
border:"1px solid var(--champagne)",
borderRadius:"var(--radius-md)",
boxShadow:"var(--shadow-card)",
display:"flex",
flexDirection:"column",
gap:"15px",
textAlign:"center"
},



button:{
backgroundColor:"var(--gold)",
color:"white",
border:"none",
padding:"12px",
borderRadius:"var(--radius-sm)",
cursor:"pointer",
fontWeight:600
},



secondaryButton:{
backgroundColor:"white",
color:"var(--charcoal)",
border:"1px solid var(--gold)",
padding:"12px",
borderRadius:"var(--radius-sm)",
cursor:"pointer",
fontWeight:600
},



actions:{
display:"flex",
justifyContent:"center",
gap:"15px",
marginTop:"15px"
},



result:{
fontSize:"20px",
fontWeight:600
}


};



export default ScentFinder;