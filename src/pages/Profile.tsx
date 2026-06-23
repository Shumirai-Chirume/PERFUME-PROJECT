import PersonalIdentification from "../components/PersonalIdentification"
import OlfactoryProfile from "../components/OlfactoryProfile" 
import AccountInfrastructure from "../components/AccountInfrastructure"
import CommitUpdates from "../components/CommitUpdates"
import AddressDirectory from "../components/AddressDirectory"

function Profile() {
  return (
    <div style={styles.page}>

      <h1 style={styles.title}>Profile Settings</h1>

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
  },

  gridTop: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr 1fr",
    gap: "16px",
    alignItems: "start"
  },

  gridBottom: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "16px"
  }
}

export default Profile