import ProductsPageNav from "../components/ProductsPageNav"
import ProductGallery from "../components/ProductGallery"
import ProductDetailsPanel from "../components/ProductDetailsPanel"
import YouMayAlsoLike from "../components/YouMayAlsoLike"
import Footer from "../components/Footer"

function Products() {
  return (
    <div>

      <ProductsPageNav />

      <div style={styles.main}>
        <ProductGallery />
        <ProductDetailsPanel />
      </div>

      <YouMayAlsoLike />
      <Footer />

    </div>
  )
}

const styles: React.CSSProperties = {
  main: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    padding: "20px"
  }
}

export default Products