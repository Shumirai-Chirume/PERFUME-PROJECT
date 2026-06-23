import SystemFilters from "../components/SystemFilters"
import TransactionTable from "../components/TransactionTable"
import ShipmentReview from "../components/ShipmentReview"
import ShipmentManifestReview from "../components/ShipmentManifestReview"

function OrderHistory() {
  return (
    <div style={styles.page}>

      <h1 style={styles.title}>Order History</h1>

      <SystemFilters />

      <TransactionTable />

      <ShipmentReview />

      <ShipmentManifestReview />

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
  }
}

export default OrderHistory