import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import ScentFinder from "./pages/ScentFinder"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Products from "./pages/Products"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import OrderHistory from "./pages/OrderHistory"
import DashboardOverview from "./admin/pages/DashboardOverview"
import ProductManagement from "./admin/pages/ProductManagement"
import CategoryManagement from "./admin/pages/CategoryManagement"
import OrderManagement from "./admin/pages/OrderManagement"
import CustomerManagement from "./admin/pages/CustomerManagement"
import Reports from "./admin/pages/Reports"
import Settings from "./admin/pages/Settings"
import Shipment from "./pages/Shipment";

function App() {
  return (
    <Routes>

      {/* ADMIN ROUTES */}
      <Route
        path="/admin/dashboard"
        element={<DashboardOverview />}
      />
      <Route
  path="/admin/products"
  element={<ProductManagement />}
/>
<Route
  path="/admin/categories"
  element={<CategoryManagement />}
/>
<Route
  path="/admin/orders"
  element={<OrderManagement />}
/>
<Route
  path="/admin/customers"
  element={<CustomerManagement />}
/>
<Route
  path="/admin/reports"
  element={<Reports />}
/>
<Route
  path="/admin/settings"
  element={<Settings />}
/>
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route 
 path="/scent-finder" 
 element={<ScentFinder />} 
/>
<Route 
 path="/shipment" 
 element={<Shipment />} 
/>

      {/* CUSTOMER WEBSITE */}
      <Route
        path="*"
        element={
          <div style={{ paddingTop: "70px" }}>

            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/products" element={<Products />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/order-history" element={<OrderHistory />} />
            </Routes>

          </div>
        }
      />

    </Routes>
  )
}

export default App