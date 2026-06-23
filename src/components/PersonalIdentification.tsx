function PersonalIdentification() {
  return (
    <div style={styles.container}>

      <div style={styles.top}>
        <div style={styles.avatar}></div>
        <button>Upload New Photograph</button>
      </div>

      <div style={styles.field}>Full Name: John Doe</div>
      <div style={styles.field}>Email: johndoe@email.com</div>
      <div style={styles.field}>Mobile: +123456789</div>

    </div>
  )
}

const styles: any = {
  container: {
    border: "1px solid #e5e4e7",
    padding: "16px",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  top: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },

  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "4px",
    backgroundColor: "#ddd"
  },

  field: {
    padding: "10px",
    border: "1px solid #eee"
  }
}

export default PersonalIdentification