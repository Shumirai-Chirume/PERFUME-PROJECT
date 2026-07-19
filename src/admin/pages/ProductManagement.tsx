import AdminSidebar from "../components/AdminSidebar"
import { useEffect, useState } from "react";
import { getProducts, type Product } from "../../api";


function ProductManagement() {
  const [products, setProducts] = useState<Product[]>([]);
const [search, setSearch] = useState("");



useEffect(() => {

  const loadProducts = async () => {

    const data = await getProducts();

    setProducts(data);

  };


  loadProducts();

}, []);

  return (
    <div style={styles.page}>

      <AdminSidebar />

      <main style={styles.mainContent}>

        {/* TOPBAR */}
        <div style={styles.topbar}>

         <input
 type="text"
 placeholder="Search..."
 style={styles.search}
 value={search}
 onChange={(e)=>setSearch(e.target.value)}
/>

          <div style={styles.profileSection}>

            <div style={styles.icon}>🔔</div>

            <div style={styles.icon}>💬</div>

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

        {/* CONTENT */}
        <section style={styles.content}>

          {/* HEADER */}
          <div style={styles.headerRow}>

            <h1 style={styles.title}>
              Product Catalog Matrix
            </h1>

            <button style={styles.addButton}>
              + Add New Perfume
            </button>

          </div>

          {/* FILTERS */}
          <div style={styles.filters}>

            <div style={styles.filterCard}>
              <p style={styles.filterLabel}>
                Fuller Formulation Collection Keys
              </p>

              <select style={styles.select}>
                <option>All Collections</option>
                <option>Luxury Oud</option>
                <option>Fresh Citrus</option>
                <option>Floral Essence</option>
              </select>
            </div>

            <div style={styles.filterCard}>
              <p style={styles.filterLabel}>
                All Brand Houses
              </p>

              <select style={styles.select}>
                <option>All Brands</option>
                <option>Chanel</option>
                <option>Dior</option>
                <option>Tom Ford</option>
              </select>
            </div>

          </div>

          {/* TABLE */}
          <div style={styles.tableContainer}>

            <div style={styles.tableHeader}>
              <span>Image</span>
              <span>Perfume Name</span>
              <span>Brand House</span>
              <span>Category</span>
              <span>Price</span>
              <span>Stock</span>
              <span>Status</span>
              <span>Actions</span>
            </div>

           {
products
.filter(product =>
product.name
.toLowerCase()
.includes(search.toLowerCase())
)
.map(product => (

<div 
key={product.id}
style={styles.row}
>


<img
src={product.image}
style={styles.image}
/>


<span>
{product.name}
</span>


<span>
Perfume Hub
</span>


<span>
{product.category}
</span>


<span>
${product.price}
</span>


<span>
Available
</span>


<div style={styles.activeStatus}>
Active
</div>


<div style={styles.actions}>


<button
style={styles.actionButton}
onClick={()=>{
alert(
`${product.name}\n${product.description}`
)
}}
>
👁
</button>


<button
style={styles.deleteButton}
onClick={()=>{

setProducts(
products.filter(
item=>item.id !== product.id
)
)

}}
>
🗑
</button>


</div>


</div>

))
}

          </div>

        </section>

      </main>

    </div>
  )
}

const styles: any = {
  page: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f8f8f8"
  },

  mainContent: {
    marginLeft: "280px",
    width: "100%"
  },

  topbar: {
    position: "sticky",
    top: 0,

    height: "80px",

    background: "rgba(251,251,249,0.85)",

    backdropFilter: "blur(20px)",

    borderBottom:
      "1px solid rgba(26,26,26,0.05)",

    display: "flex",

    justifyContent: "space-between",

    alignItems: "center",

    padding: "0 32px",

    zIndex: 100
  },

  search: {
    width: "320px",
    height: "50px",

    borderRadius: "var(--radius-md)",

    border:
      "1px solid rgba(18,18,18,0.12)",

    padding: "0 16px",

    backgroundColor: "white"
  },

  profileSection: {
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

  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: "24px"
  },

  title: {
    margin: 0
  },

  addButton: {
    backgroundColor: "var(--gold)",

    color: "white",

    border: "none",

    borderRadius: "var(--radius-md)",

    padding: "14px 20px",

    cursor: "pointer",

    fontWeight: 600
  },

  filters: {
    display: "grid",

    gridTemplateColumns: "1fr 1fr",

    gap: "20px",

    marginBottom: "28px"
  },

  filterCard: {
    backgroundColor: "white",

    padding: "20px",

    borderRadius: "var(--radius-md)",

    boxShadow: "var(--shadow-card)"
  },

  filterLabel: {
    marginBottom: "12px",
    fontWeight: 600
  },

  select: {
    width: "100%",
    height: "56px"
  },

  tableContainer: {
    backgroundColor: "white",

    borderRadius: "var(--radius-md)",

    overflow: "hidden",

    boxShadow: "var(--shadow-card)"
  },

  tableHeader: {
    display: "grid",

    gridTemplateColumns:
      "80px 1.2fr 1.2fr 1fr 1fr 1fr 1fr 1fr",

    padding: "20px",

    fontWeight: 600,

    borderBottom:
      "1px solid rgba(18,18,18,0.06)"
  },

  row: {
    display: "grid",

    gridTemplateColumns:
      "80px 1.2fr 1.2fr 1fr 1fr 1fr 1fr 1fr",

    alignItems: "center",

    padding: "20px",

    borderBottom:
      "1px solid rgba(18,18,18,0.05)"
  },

  image: {
    width: "56px",
    height: "56px",

    objectFit: "cover",

    borderRadius: "12px"
  },

  activeStatus: {
    backgroundColor: "#e7f7ec",

    color: "#2e7d32",

    padding: "8px 12px",

    borderRadius: "999px",

    fontSize: "13px",

    width: "fit-content"
  },

  inactiveStatus: {
    backgroundColor: "#fff4e5",

    color: "#ef6c00",

    padding: "8px 12px",

    borderRadius: "999px",

    fontSize: "13px",

    width: "fit-content"
  },

  actions: {
    display: "flex",
    gap: "10px"
  },

  actionButton: {
    width: "38px",
    height: "38px",

    border: "none",

    borderRadius: "10px",

    backgroundColor: "var(--champagne)",

    cursor: "pointer"
  },

  deleteButton: {
    width: "38px",
    height: "38px",

    border: "none",

    borderRadius: "10px",

    backgroundColor: "#ffe9e9",

    cursor: "pointer"
  }
}

export default ProductManagement