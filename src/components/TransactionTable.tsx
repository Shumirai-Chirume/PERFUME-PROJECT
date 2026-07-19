import { useEffect, useState } from "react";
import { getOrders } from "../api";
import type { Order } from "../api";

function TransactionTable() {

  const [data, setData] = useState<Order[]>([]);


  useEffect(() => {
    const orders = getOrders();
    setData(orders);
  }, []);



  const handleDeepDive = (order: Order) => {
    alert(
      `
Order Details

ID: ${order.id}
Date: ${order.date}
Customer: ${order.customer}
Status: ${order.status}
Amount: $${order.amount.toFixed(2)}
Address: ${order.address}
City: ${order.city}
Payment Method: ${order.method}
      `
    );
  };



  const handleReorder = (order: Order) => {

    alert(
      `Reorder request created for Order #${order.id}`
    );

    // Later we connect this to saved order items
  };



  const handleInvoice = (order: Order) => {

    const invoice = `
PerfumeHub Invoice

Order ID: ${order.id}
Date: ${order.date}

Customer:
${order.customer}

Amount:
$${order.amount.toFixed(2)}

Status:
${order.status}
    `;


    const blob = new Blob(
      [invoice],
      { type: "text/plain" }
    );


    const url = URL.createObjectURL(blob);


    const link = document.createElement("a");

    link.href = url;
    link.download = `invoice-${order.id}.txt`;

    link.click();


    URL.revokeObjectURL(url);

  };



  return (
    <div style={styles.container}>


      <div style={styles.header}>
        <span>ID</span>
        <span>Date</span>
        <span>Customer</span>
        <span>Status</span>
        <span>Value</span>
        <span>Actions</span>
      </div>



      {
        data.length === 0 ? (

          <p>No orders found</p>

        ) : (

          data.map((item) => (

            <div 
              key={item.id}
              style={styles.row}
            >

              <span>
                #{item.id}
              </span>


              <span>
                {item.date}
              </span>


              <span>
                {item.customer}
              </span>


              <span>
                {item.status}
              </span>


              <span>
                ${item.amount.toFixed(2)}
              </span>



              <div style={styles.actions}>


  <button
  style={styles.actionButton}
  onClick={() => handleDeepDive(item)}
>
  View Data Deep Dive
</button>


<button
  style={styles.actionButton}
  onClick={() => handleReorder(item)}
>
  Reorder
</button>


<button
  style={styles.actionButton}
  onClick={() => handleInvoice(item)}
>
  Get Invoice PDF
</button>

              </div>


            </div>

          ))

        )
      }


    </div>
  )
}



const styles:any = {

  container:{
    border:"1px solid #e5e4e7",
    padding:"16px",
    borderRadius:"var(--radius-sm)",
    display:"flex",
    flexDirection:"column",
    gap:"10px"
  },


  header:{
    display:"flex",
    justifyContent:"space-between",
    fontWeight:600,
    borderBottom:"1px solid #eee",
    paddingBottom:"8px"
  },


  row:{
    display:"flex",
    flexDirection:"column",
    gap:"10px",
    padding:"15px 0",
    borderBottom:"1px solid #f0f0f0"
  },


  actions:{
    display:"flex",
    gap:"10px",
    flexWrap:"wrap"
  },

  actionButton: {
  padding: "8px 14px",
  borderRadius: "var(--radius-sm)",
  border: "1px solid var(--gold)",
  backgroundColor: "white",
  color: "var(--rich-black)",
  cursor: "pointer",
  fontSize: "13px",
  fontWeight: 500,
  transition: "0.2s ease"
},

}



export default TransactionTable;