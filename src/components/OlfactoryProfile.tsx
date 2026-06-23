function OlfactoryProfile() {
  return (
    <div style={styles.container}>

      <h3>Olfactory Signature Profile</h3>

      <div style={styles.card}>
        Woody / Oriental Spice Elements
      </div>

      <div style={styles.card}>
        Preferred Brands: Fiel, Privier, Old Masters
      </div>

      <div style={styles.card}>
        Heavy Base / Layering Preference
      </div>

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

  card: {
    padding: "10px",
    border: "1px solid #eee"
  }
}

export default OlfactoryProfile