import SystemFilters from "../components/SystemFilters"
import TransactionTable from "../components/TransactionTable"
import ShipmentManifestReview from "../components/ShipmentManifestReview"
import Footer from "../components/Footer"


function OrderHistory() {
  return (
    <section className="section">
      <div className="container">

        <div style={styles.page}>

          <h1 style={styles.title}>Order History</h1>

          <SystemFilters />

          <TransactionTable />

          <ShipmentManifestReview />

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
  }
}

export default OrderHistory