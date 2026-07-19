function SystemFilters() {
  return (
    <div style={styles.container}>

      <button className="btn btn-secondary">
        All Transactions
      </button>

      <button className="btn btn-secondary">
        Processing Loop
      </button>

      <button className="btn btn-secondary">
        Dispatched Route
      </button>

      <button className="btn btn-secondary">
        Archived / Delivered
      </button>

    </div>
  )
}

const styles: any = {
  container: {
    display: "flex",
    gap: "12px"
  }
}

export default SystemFilters