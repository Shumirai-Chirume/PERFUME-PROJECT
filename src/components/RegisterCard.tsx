import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function RegisterCard() {

  const { register } = useAuth();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {

    const newUser = {
      name: fullName,
      email,
      password
    };

    register(newUser);

    alert("Account created successfully!");

    navigate("/profile");
  };


  return (
    <div style={styles.card}>

      <h1 style={styles.heading}>
        Create Your Account
      </h1>


      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />


      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />


      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />


      <p style={styles.hint}>
        Password should be at least 8 characters
      </p>


      <label style={styles.checkboxContainer}>
        <input type="checkbox" />
        I agree to the Terms & Conditions
      </label>


      <button
        className="btn btn-primary"
        onClick={handleRegister}
      >
        Create Account
      </button>


      <p
  style={styles.loginLink}
  onClick={() => navigate("/login")}
>
  Already have an account? Login
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
    fontSize:"28px",
    textAlign:"center",
    margin:0,
    color:"var(--rich-black)"
  },


  hint:{
    fontSize:"13px",
    color:"var(--neutral-grey)",
    margin:0
  },


  checkboxContainer:{
    display:"flex",
    gap:"10px",
    alignItems:"center",
    fontSize:"14px",
    color:"var(--charcoal)"
  },


  loginLink: {
  textAlign: "center",
  fontSize: "14px",
  marginTop: "10px",
  color: "var(--neutral-grey)",
  cursor: "pointer"
}

}


export default RegisterCard;