import { useEffect, useState } from "react";
import { getOrders } from "../api";

import SystemFilters from "../components/SystemFilters";
import ShipmentManifestReview from "../components/ShipmentManifestReview";
import Footer from "../components/Footer";

function OrderHistory() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const data = getOrders();
    setOrders(data);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div style={styles.page}>
          <h1 style={styles.title}>
            Order History
          </h1>

          <SystemFilters />

          {orders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                style={styles.orderCard}
              >
                <h3>Order #{order.id}</h3>

                <p>
                  <strong>Status:</strong> {order.status}
                </p>

                <p>
                  <strong>Customer:</strong> {order.customer}
                </p>

                <p>
                  <strong>Payment:</strong> {order.method}
                </p>

                <p>
                  <strong>Address:</strong> {order.address}
                </p>

                <p>
                  <strong>Date:</strong> {order.date}
                </p>

                <p>
                  <strong>Total:</strong> ZMW {order.amount.toFixed(2)}
                </p>

                <h4>Items</h4>

                <ul>
                  {order.items?.map((item: any) => (
                    <li key={item.id}>
                      {item.name} × {item.quantity} — ZMW{" "}
                      {Number(item.price).toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}

          <ShipmentManifestReview />
        </div>
      </div>

      <Footer />
    </section>
  );
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

  orderCard: {
    border: "1px solid var(--champagne)",
    borderRadius: "var(--radius-sm)",
    padding: "20px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }
};

export default OrderHistory;