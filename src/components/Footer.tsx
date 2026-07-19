function Footer() {
  return (
    <footer style={styles.footer}>

      <div style={styles.grid}>

        {/* BRAND */}
        <div style={styles.column}>
          <h2 style={styles.logo}>Perfume Hub</h2>

          <p style={styles.text}>
            International Century House<br />
            Structure in Memory & Presence<br />
            Through Aromatics
          </p>
        </div>

        {/* HOUSES */}
        <div style={styles.column}>
          <h4 style={styles.title}>Houses</h4>
          <p style={styles.text}>Feminine Atelier</p>
          <p style={styles.text}>Masculine Absolute</p>
          <p style={styles.text}>Clean Botanist</p>
          <p style={styles.text}>Rare Harvest Limiteds</p>
        </div>

        {/* CONCIERGE */}
        <div style={styles.column}>
          <h4 style={styles.title}>Concierge</h4>
          <p style={styles.text}>Private Consultations</p>
          <p style={styles.text}>Shipping & Bespoke Duties</p>
          <p style={styles.text}>Refill Registry</p>
          <p style={styles.text}>Atelier Locations</p>
        </div>

        {/* LEGAL */}
        <div style={styles.column}>
          <h4 style={styles.title}>Legal</h4>
          <p style={styles.text}>Privacy Mandate</p>
          <p style={styles.text}>Sourcing Compliance</p>
          <p style={styles.text}>Terms of Service</p>
        </div>

      </div>

      <div style={styles.divider}></div>

      <div style={styles.bottomRow}>

        <span>2026 Perfume Hub Ltd. All rights reserved.</span>

        <span>Crafted in Luxury</span>

      </div>

    </footer>
  )
}

const styles: any = {
  footer: {
    backgroundColor: "#C8A97E",
    color: "rgba(255,255,255,0.75)",
    padding: "60px 40px 30px 40px",
    marginTop: "60px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
    gap: "40px"
  },

  column: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },

  logo: {
    fontSize: "26px",
    marginBottom: "10px",
    color: "black",
  },

  title: {
    fontSize: "14px",
    fontWeight: 600,
    marginBottom: "10px",
    color: "black",
  },

  text: {
    fontSize: "13px",
    color: "black",
    lineHeight: "1.6"
  },

  divider: {
    height: "1px",
    backgroundColor: "white",
    margin: "30px 0"
  },

  bottomRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    color: "black",
  }
}

export default Footer