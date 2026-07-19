import brandImage from "../assets/brand.webp"

function BrandStory() {
  return (
    <section style={styles.container}>

      <div
        style={{
          ...styles.image,
          backgroundImage: `url(${brandImage})`
        }}
      ></div>

      <div style={styles.content}>

        <p style={styles.label}>
          Luxury Fragrance House
        </p>

        <h2 style={styles.heading}>
          Our Heritage
        </h2>

        <p style={styles.text}>
          We source the finest ingredients to create timeless fragrances
          focused on sustainability, elegance, and craftsmanship.
          Every scent is carefully curated to evoke emotion,
          confidence, and individuality.
        </p>

      </div>

    </section>
  )
}

const styles: any = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "50px",

    padding: "80px 40px",

    backgroundColor: "white",

    borderRadius: "var(--radius-md)",

    boxShadow: "var(--shadow-card)"
  },

  image: {
    flex: 1,

    minHeight: "420px",

    borderRadius: "var(--radius-md)",

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    boxShadow: "var(--shadow-card)"
  },

  content: {
    flex: 1,

    display: "flex",
    flexDirection: "column",

    gap: "20px"
  },

  label: {
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",

    color: "var(--gold)"
  },

  heading: {
    margin: 0
  },

  text: {
    fontSize: "16px",
    lineHeight: 1.8,

    color: "var(--charcoal)"
  }
}

export default BrandStory