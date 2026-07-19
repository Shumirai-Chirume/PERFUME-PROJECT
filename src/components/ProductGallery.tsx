import purpleChanel from "../assets/purple chanel.webp"
import beigeChanel from "../assets/beige chanel.webp"
import greenChanel from "../assets/green chanel.webp"
import pinkChanel from "../assets/pink chanel.webp"

function ProductGallery() {
  return (
    <div style={styles.container}>

      {/* thumbnails */}
      <div style={styles.thumbs}>

        <div
          style={{
            ...styles.thumb,
            backgroundImage: `url(${beigeChanel})`
          }}
        ></div>

        <div
          style={{
            ...styles.thumb,
            backgroundImage: `url(${greenChanel})`
          }}
        ></div>

        <div
          style={{
            ...styles.thumb,
            backgroundImage: `url(${pinkChanel})`
          }}
        ></div>

      </div>

      {/* main image */}
      <div
        style={{
          ...styles.main,
          backgroundImage: `url(${purpleChanel})`
        }}
      ></div>

    </div>
  )
}

const styles: any = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  },

  thumbs: {
    display: "flex",
    gap: "12px",
    justifyContent: "center"
  },

  thumb: {
    width: "80px",
    height: "80px",

    border: "1px solid var(--champagne)",

    borderRadius: "var(--radius-md)",

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    cursor: "pointer",

    transition:
      "300ms cubic-bezier(0.16, 1, 0.3, 1)",

    boxShadow: "var(--shadow-card)"
  },

  main: {
    width: "420px",
    height: "520px",

    borderRadius: "var(--radius-md)",

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    backgroundColor: "var(--champagne)",

    boxShadow: "var(--shadow-product-hover)"
  }
}

export default ProductGallery