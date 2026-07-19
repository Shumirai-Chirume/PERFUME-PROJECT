import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function AccountInfrastructure() {

  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState("Private");

  const { logout } = useAuth();
  const navigate = useNavigate();


  const handlePasscode = () => {
    alert("Passcode update feature coming soon");
  };


  const togglePrivacy = () => {
    setPrivacy((current) =>
      current === "Private" ? "Public" : "Private"
    );
  };


  const handleLogout = () => {
    logout();
    navigate("/login");
  };


  return (
    <div style={styles.container}>

      <h3>Account Infrastructure</h3>


      <button
        style={styles.item}
        onClick={handlePasscode}
      >
        Passcode Updates →
      </button>


      <button
        style={styles.item}
        onClick={() => setNotifications(!notifications)}
      >
        Notifications: {notifications ? "Enabled" : "Disabled"}
      </button>


      <button
        style={styles.item}
        onClick={togglePrivacy}
      >
        Privacy Controls: {privacy} →
      </button>


      <button
        style={styles.logoutButton}
        onClick={handleLogout}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--gold-dark)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--gold)")
        }
      >
        Logout
      </button>


    </div>
  )
}


const styles:any = {

  container:{
    border:"1px solid #e5e4e7",
    padding:"16px",
    borderRadius:"6px",
    display:"flex",
    flexDirection:"column",
    gap:"12px"
  },


  item:{
    padding:"10px",
    border:"1px solid #eee",
    backgroundColor:"white",
    color:"var(--rich-black)",
    borderRadius:"var(--radius-sm)",
    cursor:"pointer",
    textAlign:"left",
    fontSize:"14px",
    transition:"0.2s ease"
  },


  logoutButton:{
    marginTop:"10px",
    padding:"10px",
    backgroundColor:"var(--gold)",
    color:"white",
    border:"none",
    borderRadius:"var(--radius-sm)",
    cursor:"pointer",
    fontWeight:600,
    transition:"0.2s ease"
  }

}


export default AccountInfrastructure;