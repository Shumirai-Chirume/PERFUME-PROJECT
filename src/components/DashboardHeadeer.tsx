import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function DashboardHeader() {

  const navigate = useNavigate();
  const { logout } = useAuth();


  const handleNavigation = (e: any) => {

    const value = e.target.value;

    switch(value){

      case "account":
        navigate("/profile");
        break;

      case "dashboard":
        navigate("/dashboard");
        break;

      case "profile":
        navigate("/profile");
        break;

      case "orders":
        navigate("/order-history");
        break;

      case "checkout":
        navigate("/checkout");
        break;

      case "logout":
        logout();
        navigate("/login");
        break;

    }

  };


  return (
    <div style={styles.container}>

      <div style={styles.left}>

        <div style={styles.avatar}></div>

        <div>
          <h3>Welcome back, Mason Guest</h3>
        </div>

      </div>


      <div style={styles.right}>

        <select
          style={styles.select}
          onChange={handleNavigation}
          defaultValue=""
        >

          <option value="" disabled>
            My Account
          </option>

          <option value="account">
            My Account
          </option>

          <option value="dashboard">
            Dashboard
          </option>

          <option value="profile">
            Profile Settings
          </option>

          <option value="orders">
            Order History
          </option>

          <option value="checkout">
            Checkout
          </option>

          <option value="logout">
            Logout
          </option>

        </select>


        <div style={styles.bell}>
          🔔
        </div>

      </div>

    </div>
  )
}


const styles: any = {

  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    border: "1px solid var(--champagne)",
    borderRadius: "10px",
    backgroundColor: "white"
  },


  left: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },


  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "var(--champagne)",
    border: "2px solid var(--gold)"
  },


  right: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },


  select: {
    padding: "10px",
    border: "1px solid var(--champagne)",
    borderRadius: "var(--radius-sm)",
    backgroundColor: "white",
    cursor: "pointer"
  },


  bell: {
    fontSize: "22px",
    padding: "8px",
    borderRadius: "var(--radius-sm)",
    cursor: "pointer",
    backgroundColor: "var(--champagne)"
  }

};


export default DashboardHeader;