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
      <HeroSection />
      <ShopByDepartment />
      <ScentFinderStrip />
      <FeaturedProducts />
      <BrandStory />
      <Footer />

    </div>
  )
}

export default Home