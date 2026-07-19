import AdminSidebar from "../components/AdminSidebar"
import { useEffect, useState } from "react";
import { getProducts, getOrders } from "../../api";

function DashboardOverview() {
  const [stats, setStats] = useState({
  products: 0,
  categories: 0,
  orders: 0,
  customers: 0,
  revenue: 0
});


useEffect(() => {

  const loadDashboard = async () => {

    const products = await getProducts();

    const orders = getOrders();


    const categories = new Set(
      products.map(product => product.category)
    );


    const revenue = orders.reduce(
      (total, order) => total + order.amount,
      0
    );


    setStats({
      products: products.length,
      categories: categories.size,
      orders: orders.length,
      customers: Number(localStorage.getItem("customers")) || 0,
      revenue
    });

  };


  loadDashboard();

}, []);

  return (
    <div style={styles.page}>

      <AdminSidebar />

      <main style={styles.mainContent}>

        <div style={styles.topbar}>
          
          <input
            type="text"
            placeholder="Search..."
            style={styles.search}
          />

          <div style={styles.topbarRight}>

            <div style={styles.icon}>
              🔔
            </div>

            <div style={styles.icon}>
              💬
            </div>

            <div style={styles.profile}>
              <div style={styles.avatar}></div>

              <div>
                <div style={styles.name}>
                  Admin User
                </div>

                <div style={styles.role}>
                  Super Admin
                </div>
              </div>
            </div>

          </div>

        </div>

        <section style={styles.content}>

          <h1 style={styles.title}>
            Dashboard Overview
          </h1>

          <div style={styles.cardsGrid}>

            <div style={styles.card}>
              <p style={styles.cardLabel}>Total Products</p>

              <h2 style={styles.cardValue}>
 {stats.products}
</h2>

              <span style={styles.cardGrowth}>
                +4% versus last month
              </span>
            </div>

            <div style={styles.card}>
              <p style={styles.cardLabel}>Total Categories</p>

              <h2 style={styles.cardValue}>
 {stats.categories}
</h2>

              <span style={styles.cardGrowth}>
                Stable scale
              </span>
            </div>

            <div style={styles.card}>
              <p style={styles.cardLabel}>Total Orders</p>

              <h2 style={styles.cardValue}>
 {stats.orders}
</h2>

              <span style={styles.cardGrowth}>
                +12% scaling
              </span>
            </div>

            <div style={styles.card}>
              <p style={styles.cardLabel}>Total Customers</p>

             <h2 style={styles.cardValue}>
 {stats.customers}
</h2>

              <span style={styles.cardGrowth}>
                +8% acquisition
              </span>
            </div>

            <div style={styles.card}>
              <p style={styles.cardLabel}>Gross Revenue</p>

              <h2 style={styles.cardValue}>
 ${stats.revenue.toFixed(2)}
</h2>

              <span style={styles.cardGrowth}>
                +18.4% fiscal pace
              </span>
            </div>

          </div>

          <div style={styles.bottomGrid}>

            <div style={styles.chartCard}>
              <h3>Monthly Sales Performance</h3>

              <div style={styles.fakeChart}>
                Graph Area
              </div>
            </div>

            <div style={styles.topPerfumes}>

              <h3>Top Selling Perfumes</h3>

              <div style={styles.perfumeItem}>
                <span>Dolce Rose</span>
                <span>482 sold</span>
              </div>

              <div style={styles.perfumeItem}>
                <span>Pink Velvet</span>
                <span>391 sold</span>
              </div>

              <div style={styles.perfumeItem}>
                <span>Royal Essence</span>
                <span>354 sold</span>
              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  )
}

const styles: any = {
  page: {
    display: "flex",
    backgroundColor: "#f8f8f8",
    minHeight: "100vh"
  },

  mainContent: {
    marginLeft: "280px",
    width: "100%"
  },

  topbar: {
    position: "sticky",
    top: 0,

    height: "80px",

    background: "rgba(251, 251, 249, 0.85)",

    backdropFilter: "blur(20px)",

    borderBottom:
      "1px solid rgba(26,26,26,0.05)",

    display: "flex",

    alignItems: "center",

    justifyContent: "space-between",

    padding: "0 32px",

    zIndex: 100
  },

  search: {
    width: "320px",
    height: "50px",

    borderRadius: "var(--radius-md)",

    border:
      "1px solid rgba(18,18,18,0.12)",

    backgroundColor: "white",

    padding: "0 16px"
  },

  topbarRight: {
    display: "flex",
    alignItems: "center",
    gap: "20px"
  },

  icon: {
    fontSize: "20px",
    cursor: "pointer"
  },

  profile: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },

  avatar: {
    width: "42px",
    height: "42px",

    borderRadius: "50%",

    backgroundColor: "var(--gold)"
  },

  name: {
    fontWeight: 600
  },

  role: {
    fontSize: "13px",
    color: "gray"
  },

  content: {
    padding: "32px"
  },

  title: {
    marginBottom: "24px"
  },

  cardsGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(5, 1fr)",

    gap: "20px",

    marginBottom: "32px"
  },

  card: {
    backgroundColor: "white",

    borderRadius: "var(--radius-md)",

    padding: "24px",

    boxShadow: "var(--shadow-card)"
  },

  cardLabel: {
    fontSize: "14px",
    color: "gray",
    marginBottom: "12px"
  },

  cardValue: {
    margin: 0
  },

  cardGrowth: {
    fontSize: "13px",
    color: "var(--success-green)"
  },

  bottomGrid: {
    display: "grid",

    gridTemplateColumns: "2fr 1fr",

    gap: "24px"
  },

  chartCard: {
    backgroundColor: "white",

    borderRadius: "var(--radius-md)",

    padding: "24px",

    boxShadow: "var(--shadow-card)"
  },

  fakeChart: {
    marginTop: "20px",

    height: "320px",

    borderRadius: "var(--radius-md)",

    background:
      "linear-gradient(160deg, #F5EFE6, #EAE3D5)",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    color: "gray"
  },

  topPerfumes: {
    backgroundColor: "white",

    borderRadius: "var(--radius-md)",

    padding: "24px",

    boxShadow: "var(--shadow-card)",

    display: "flex",
    flexDirection: "column",
    gap: "16px"
  },

  perfumeItem: {
    display: "flex",

    justifyContent: "space-between",

    paddingBottom: "12px",

    borderBottom:
      "1px solid rgba(18,18,18,0.06)"
  }
}

export default DashboardOverview