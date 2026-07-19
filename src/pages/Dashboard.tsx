import DashboardHeader from "../components/DashboardHeadeer"
import AccountSummary from "../components/AccountSummary"
import QuickControls from "../components/QuickControls"
import RecentActivity from "../components/RecentActivity"
import Wishlist from "../components/Wishlist"
import ScentDiagnosis from "../components/ScentDiagnosis"
import Footer from "../components/Footer"

function Dashboard() {
  return (
    <section className="section">
      <div className="container">

        <div style={styles.page}>

          <h1 style={styles.title}>Customer Dashboard</h1>

          <DashboardHeader />

          <div style={styles.grid2}>
            <AccountSummary />
            <QuickControls />
          </div>

          <div style={styles.grid2}>
            <RecentActivity />
            <Wishlist />
          </div>

          <ScentDiagnosis />

        </div>

      </div>
      <Footer />
    </section>
  )
}

const styles: any = {
  page: {
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  },

  title: {
    margin: 0,
    color: "var(--rich-black)"
  },

  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px"
  }
}

export default Dashboard