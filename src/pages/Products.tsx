import ProductsPageNav from "../components/ProductsPageNav"
import ProductGallery from "../components/ProductGallery"
import ProductDetailsPanel from "../components/ProductDetailsPanel"
import YouMayAlsoLike from "../components/YouMayAlsoLike"
import Footer from "../components/Footer"

function Products() {
  return (
    <div>

      <ProductsPageNav />

      <section className="section">
        <div className="container">

          <div style={styles.main}>
            <ProductGallery />
            <ProductDetailsPanel />
          </div>

        </div>
      </section>

      <section className="section">
        <div className="container">
          <YouMayAlsoLike />
        </div>
      </section>

      <Footer />

    </div>
  )
}

const styles: any = {
  main: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "48px",
    alignItems: "start"
  }
}

export default Products