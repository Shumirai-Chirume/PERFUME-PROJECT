import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


function LoginCard() {

  const { login } = useAuth();
  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async () => {

    const success = await login(email,password);


    if(success){

      alert("Login successful!");

      navigate("/profile");

    } else {

      alert("Invalid email or password");

    }

  };


  return (
    <div style={styles.card}>


      <h1 style={styles.heading}>
        Welcome Back
      </h1>


      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />


      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />


      <p style={styles.link}>
        Forgot Password?
      </p>


      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>


      <div style={styles.divider}>
        <span>OR</span>
      </div>


      <button className="btn btn-google">
        Continue with Google
      </button>


      <p
  style={styles.signup}
  onClick={() => navigate("/register")}
>
  New here? Create Account
</p>


    </div>
  )
}


const styles:any = {

  card:{
    width:"350px",
    margin:"40px auto",
    padding:"30px",
    border:"1px solid var(--champagne)",
    borderRadius:"var(--radius-md)",
    display:"flex",
    flexDirection:"column",
    gap:"15px",
    backgroundColor:"white",
    boxShadow:"var(--shadow-card)"
  },


  heading:{
    fontSize:"32px",
    textAlign:"center",
    margin:0,
    color:"var(--rich-black)"
  },


  divider:{
    textAlign:"center"
  },


  link:{
    fontSize:"14px",
    cursor:"pointer",
    color:"var(--neutral-grey)"
  },


  signup: {
  textAlign: "center",
  fontSize: "14px",
  color: "var(--charcoal)",
  cursor: "pointer"
}

}


export default LoginCard;