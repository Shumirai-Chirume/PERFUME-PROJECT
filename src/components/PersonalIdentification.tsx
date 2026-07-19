import { useAuth } from "../context/AuthContext";

function PersonalIdentification() {

  const { user } = useAuth();


  return (
    <div style={styles.container}>

      <div style={styles.top}>

        <div style={styles.avatar}></div>

        <button
          style={styles.uploadButton}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--champagne)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "white")
          }
        >
          Upload New Photograph
        </button>

      </div>


      <div style={styles.field}>
        Full Name: {user?.name || "Not set"}
      </div>


      <div style={styles.field}>
        Email: {user?.email || "Not set"}
      </div>


      <div style={styles.field}>
        Mobile: +123456789
      </div>


    </div>
  )
}


const styles:any = {

  container:{
    border:"1px solid #e5e4e7",
    padding:"16px",
    borderRadius:"var(--radius-sm)",
    display:"flex",
    flexDirection:"column",
    gap:"12px"
  },


  top:{
    display:"flex",
    alignItems:"center",
    gap:"12px"
  },


  avatar:{
    width:"60px",
    height:"60px",
    borderRadius:"4px",
    backgroundColor:"#ddd"
  },


  field:{
    padding:"10px",
    border:"1px solid #eee"
  },


  uploadButton:{
    backgroundColor:"white",
    border:"1px solid var(--gold)",
    color:"var(--rich-black)",
    padding:"10px 14px",
    borderRadius:"var(--radius-sm)",
    cursor:"pointer",
    transition:"0.2s ease",
    fontWeight:500
  }

}


export default PersonalIdentification;