function ScentDiagnosis() {
  return (
    <div style={styles.container}>

      <h3>
        AI-Driven Personalized Scent Diagnosis
      </h3>

      <div style={styles.cards}>

        <div style={styles.card}>
          <h4>Noir Essence</h4>
          <p>Woody Amber Blend</p>
          <button>Explore Scents</button>
        </div>

        <div style={styles.card}>
          <h4>Royal Saffron</h4>
          <p>Rich Saffron Notes</p>
          <button>Explore Scents</button>
        </div>

      </div>

    </div>
  )
}

const styles: any = {
  container: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px"
  },

  cards: {
    display: "flex",
    gap: "20px",
    marginTop: "20px"
  },

  card: {
    flex: 1,
    border: "1px solid #eee",
    padding: "20px"
  }
}

export default ScentDiagnosis