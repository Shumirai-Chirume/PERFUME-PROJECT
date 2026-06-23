function RegisterCard() {
  return (
    <div style={styles.card}>

      <h1 style={styles.heading}>Create Your Account</h1>

      <input
        type="text"
        placeholder="Full Name"
        style={styles.input}
      />

      <input
        type="email"
        placeholder="Email"
        style={styles.input}
      />

      <input
        type="password"
        placeholder="Password"
        style={styles.input}
      />

      <p style={styles.hint}>
        Password should be at least 8 characters
      </p>

      <label style={styles.checkboxContainer}>
        <input type="checkbox" />
        I agree to the Terms & Conditions
      </label>

      <button style={styles.button}>
        Create Account
      </button>

      <p style={styles.loginLink}>
        Already have an account? Login
      </p>

    </div>
  )
}

const styles: any = {
  card: {
    width: "350px",
    margin: "40px auto",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  heading: {
    fontSize: "28px",
    textAlign: "center",
    margin: 0
  },

  input: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "16px"
  },

  hint: {
    fontSize: "13px",
    color: "gray",
    margin: 0
  },

  checkboxContainer: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    fontSize: "14px"
  },

  button: {
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px"
  },

  loginLink: {
    textAlign: "center",
    fontSize: "14px",
    marginTop: "10px"
  }
}

export default RegisterCard