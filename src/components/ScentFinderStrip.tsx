import { useNavigate } from "react-router-dom";

function ScentFinderStrip() {
  const navigate = useNavigate();
  return (
    <section style={styles.container}>
      <h2>Find Your Scent</h2>

      <p>Take a quick quiz to discover your perfect perfume match</p>

      <div style={styles.moods}>
        <div style={styles.mood}>Fresh</div>
        <div style={styles.mood}>Sweet</div>
        <div style={styles.mood}>Woody</div>
      </div>

      <button
 className="btn btn-primary"
 onClick={() => navigate("/scent-finder")}
>
 Start Quiz
</button>
    </section>
  )
}

const styles: any = {
  container: {
    padding: "40px 20px",
    textAlign: "center",
    backgroundColor: "var(--champagne)",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  moods: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    margin: "10px 0"
  },

  mood: {
    padding: "8px 14px",
    borderRadius: "var(--radius-pill)",
    border: "1px solid var(--champagne)",
    backgroundColor: "white",
    fontSize: "14px"
  }
}

export default ScentFinderStrip