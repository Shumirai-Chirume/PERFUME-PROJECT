function LoginCard() {
  return (
    <div style={styles.card}>

      <h1 style={styles.heading}>Welcome Back</h1>

      <input type="email" placeholder="Email" style={styles.input} />

      <input type="password" placeholder="Password" style={styles.input} />

      <p style={styles.link}>Forgot Password?</p>

      <button style={styles.button}>Login</button>

      <div style={styles.divider}>
        <span>OR</span>
      </div>

      <button style={styles.googleButton}>
        Continue with Google
      </button>

      <p style={styles.signup}>
        New here? Create Account
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
    gap: "15px"
  },

  heading: {
   fontSize: "32px",
   textAlign: "center",
   margin: 0
  },

  input: {
    padding: "10px"
  },

  button: {
    padding: "12px",
    cursor: "pointer"
  },

  googleButton: {
    padding: "12px",
    cursor: "pointer"
  },

  divider: {
    textAlign: "center"
  },

  link: {
    fontSize: "14px",
    cursor: "pointer"
  },

  signup: {
    textAlign: "center",
    fontSize: "14px"
  }
}

export default LoginCard