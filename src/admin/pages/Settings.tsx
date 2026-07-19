import { useState, useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";

function Settings() {
  const [settings, setSettings] = useState({
    storeName: "Perfume Hub",
    supportEmail: "support@perfumehub.com",
    currency: "USD",
    theme: "Light",
    maintenanceMode: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("admin_settings");

    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const saveSettings = () => {
    localStorage.setItem(
      "admin_settings",
      JSON.stringify(settings)
    );

    alert("Settings saved successfully.");
  };

  return (
    <div style={styles.page}>

      <AdminSidebar />

      <main style={styles.mainContent}>

        <div style={styles.topbar}>
          <h2>Settings</h2>
        </div>

        <section style={styles.content}>

          <div style={styles.card}>

            <label>Store Name</label>

            <input
              style={styles.input}
              value={settings.storeName}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  storeName: e.target.value,
                })
              }
            />

            <label>Support Email</label>

            <input
              style={styles.input}
              value={settings.supportEmail}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  supportEmail: e.target.value,
                })
              }
            />

            <label>Currency</label>

            <select
              style={styles.input}
              value={settings.currency}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  currency: e.target.value,
                })
              }
            >
              <option>USD</option>
              <option>ZMW</option>
              <option>ZAR</option>
              <option>EUR</option>
            </select>

            <label>Dashboard Theme</label>

            <select
              style={styles.input}
              value={settings.theme}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  theme: e.target.value,
                })
              }
            >
              <option>Light</option>
              <option>Dark</option>
            </select>

            <div style={styles.switchRow}>
              <span>Maintenance Mode</span>

              <input
                type="checkbox"
                checked={settings.maintenanceMode}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    maintenanceMode: e.target.checked,
                  })
                }
              />
            </div>

            <button
              style={styles.button}
              onClick={saveSettings}
            >
              Save Settings
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

const styles: any = {
  page: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f8f8f8",
  },

  mainContent: {
    marginLeft: "280px",
    width: "100%",
  },

  topbar: {
    height: "80px",
    display: "flex",
    alignItems: "center",
    padding: "0 32px",
    backgroundColor: "white",
    borderBottom: "1px solid #eee",
  },

  content: {
    padding: "32px",
  },

  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "var(--radius-md)",
    boxShadow: "var(--shadow-card)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: "650px",
  },

  input: {
    height: "50px",
    padding: "0 14px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },

  switchRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 0",
  },

  button: {
    marginTop: "15px",
    backgroundColor: "var(--gold)",
    color: "white",
    border: "none",
    padding: "14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 600,
  },
};

export default Settings;