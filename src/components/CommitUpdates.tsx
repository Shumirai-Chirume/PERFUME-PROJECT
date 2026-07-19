import { useState } from "react";

function CommitUpdates() {

  const [message, setMessage] = useState("");

  const commitChanges = () => {

    localStorage.setItem(
      "profile_last_updated",
      new Date().toISOString()
    );

    setMessage("Profile updates saved successfully ✓");

    setTimeout(() => {
      setMessage("");
    }, 3000);

  };


  return (
    <div style={styles.container}>

      <button
        style={styles.button}
        onClick={commitChanges}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--gold-dark)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--gold)")
        }
      >
        Commit Updates
      </button>


      {message && (
        <p style={styles.message}>
          {message}
        </p>
      )}

    </div>
  )
}


const styles: any = {

  container: {
    border: "1px solid #e5e4e7",
    padding: "16px",
    borderRadius: "var(--radius-sm)",
    textAlign: "center"
  },


  button: {
    backgroundColor: "var(--gold)",
    color: "white",
    border: "none",
    padding: "12px 18px",
    borderRadius: "var(--radius-sm)",
    fontWeight: 600,
    cursor: "pointer",
    transition: "0.2s ease"
  },


  message: {
    marginTop: "12px",
    color: "green",
    fontWeight: 600
  }

}


export default CommitUpdates