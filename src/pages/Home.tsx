import HomeTopNav from "../components/HomeTopNav"
import HeroSection from "../components/HeroSection"
import ShopByDepartment from "../components/ShopByDepartment"
import ScentFinderStrip from "../components/ScentFinderStrip"
import FeaturedProducts from "../components/FeaturedProducts"
import BrandStory from "../components/BrandStory"
import Footer from "../components/Footer"

function Home() {
  return (
    <div>

      <HomeTopNav />

      <section className="section">
        <div className="container">
          <HeroSection />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ShopByDepartment />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScentFinderStrip />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FeaturedProducts />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <BrandStory />
        </div>
      </section>

      <Footer />

    </div>
  )
}

export default Home