import PersonalIdentification from "../components/PersonalIdentification"
import OlfactoryProfile from "../components/OlfactoryProfile"
import AccountInfrastructure from "../components/AccountInfrastructure"
import CommitUpdates from "../components/CommitUpdates"
import AddressDirectory from "../components/AddressDirectory"
import Footer from "../components/Footer"

function Profile() {
  return (
    <section className="section">
      <div className="container">

        <div style={styles.page}>

          <h1 style={styles.pageTitle}>Profile Settings</h1>

          <div style={styles.gridTop}>

            <PersonalIdentification />
            <OlfactoryProfile />
            <AccountInfrastructure />

          </div>

          <CommitUpdates />

          <div style={styles.gridBottom}>

            <AddressDirectory />

          </div>

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

  pageTitle: {
    margin: 0,
    color: "var(--rich-black)"
  },

  gridTop: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr 1fr",
    gap: "24px",
    alignItems: "start"
  },

  gridBottom: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "24px"
  }
}

export default Profile