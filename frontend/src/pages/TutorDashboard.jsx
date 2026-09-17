
import { useState } from "react";

function TutorDashboard() {

  const [subject, setSubject] = useState("");

  const handleSelect = (e) => {
    setSubject(e.target.value);
  };

  return (
    <div style={styles.container}>

      <h1>👨‍🏫 Tutor Dashboard</h1>

      <p>Manage your teaching programs and students.</p>

      <div style={styles.card}>

        <h2>Select Subject</h2>

        <select
          value={subject}
          onChange={handleSelect}
          style={styles.select}
        >
          <option value="">
            Select a subject
          </option>

          <option value="math">
            Mathematics
          </option>

          <option value="english">
            English
          </option>

          <option value="basket-weaving">
            Basket Weaving
          </option>

          <option value="tailoring">
            Tailoring
          </option>

          <option value="social-skills">
            Social Skills
          </option>

        </select>

        {subject && (
          <p>
            Selected subject:
            <strong> {subject}</strong>
          </p>
        )}

      </div>

      <div style={styles.card}>

        <h2>My Students</h2>

        <p>👤 Rahul — Mathematics</p>
        <p>👤 Anita — English</p>
        <p>👤 Sarah — Tailoring</p>

      </div>

      <div style={styles.card}>

        <h2>Today's Classes</h2>

        <p>📐 Mathematics — 10:00 AM</p>
        <p>📚 English — 2:00 PM</p>

      </div>

    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    background: "#f5f7fb",
    fontFamily: "Arial"
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "16px",
    marginTop: "25px",
    maxWidth: "800px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
  },

  select: {
    padding: "12px",
    width: "300px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  }
};

export default TutorDashboard;

