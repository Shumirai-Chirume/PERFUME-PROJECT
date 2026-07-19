import { useEffect, useState } from "react";
import { getProfile, saveProfile } from "../api";
import type { UserProfile } from "../api";

function OlfactoryProfile() {

  const [profile, setProfile] = useState<UserProfile | null>(null);


  useEffect(() => {
    const data = getProfile();
    setProfile(data);
  }, []);


  const handleChange = (
    field: keyof UserProfile,
    value: string
  ) => {
    if (!profile) return;

    setProfile({
      ...profile,
      [field]: value
    });
  };


  const handleSave = () => {
    if (!profile) return;

    saveProfile(profile);
    alert("Olfactory profile updated!");
  };


  if (!profile) return null;


  return (
    <div style={styles.container}>

      <h3>Olfactory Signature Profile</h3>


      <div style={styles.card}>
        <div style={styles.label}>
          Favorite Scent Notes
        </div>

        <input
          style={styles.input}
          value={profile.favoriteScentNotes}
          onChange={(e) =>
            handleChange(
              "favoriteScentNotes",
              e.target.value
            )
          }
        />
      </div>



      <div style={styles.card}>
        <div style={styles.label}>
          Fragrance Frequency
        </div>

        <input
          style={styles.input}
          value={profile.frequencyPreference}
          onChange={(e) =>
            handleChange(
              "frequencyPreference",
              e.target.value
            )
          }
        />
      </div>



      <div style={styles.card}>
        <div style={styles.label}>
          Scent Style
        </div>

        <input
          style={styles.input}
          value={profile.favoriteScentNotes}
          onChange={(e) =>
            handleChange(
              "favoriteScentNotes",
              e.target.value
            )
          }
        />
      </div>


      <button
        style={styles.button}
        onClick={handleSave}
      >
        Save Scent Profile
      </button>


    </div>
  )
}



const styles: any = {

  container: {
    border: "1px solid #e5e4e7",
    padding: "16px",
    borderRadius: "var(--radius-sm)",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },


  card: {
    padding: "14px",
    border: "1px solid var(--champagne)",
    borderRadius: "var(--radius-sm)",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },


  label: {
    fontSize: "12px",
    color: "var(--charcoal)"
  },


  input: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px"
  },


  button: {
    backgroundColor: "var(--gold)",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "var(--radius-sm)",
    cursor: "pointer",
    fontWeight: 600
  }

}


export default OlfactoryProfile;