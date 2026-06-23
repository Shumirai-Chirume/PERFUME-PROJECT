import DashboardHeader from "../components/DashboardHeader"
import AccountSummary from "../components/AccountSummary"
import QuickControls from "../components/QuickControls"
import RecentActivity from "../components/RecentActivity"
import Wishlist from "../components/Wishlist"
import ScentDiagnosis from "../components/ScentDiagnosis"

function Dashboard() {
  return (
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
  )
}

const styles: any = {
  page: {
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  title: {
    margin: 0,
    fontSize: "22px",
    fontWeight: 600
  },

  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px"
  }
}

export default Dashboard