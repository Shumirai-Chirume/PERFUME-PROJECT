function ScentFinderStrip() {
  return (
    <section style={styles.container}>
      <h2>Find Your Scent</h2>

      <p>Take a quick quiz to discover your perfect perfume match</p>

      <div style={styles.moods}>
        <div>Fresh</div>
        <div>Sweet</div>
        <div>Woody</div>
      </div>

      <button>Start Quiz</button>
    </section>
  )
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center"
  },
  moods: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    margin: "10px 0"
  }
}

export default ScentFinderStrip