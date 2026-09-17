
function StudentDashboard() {
  return (
    <div style={styles.container}>

      <h1>🎓 Student Dashboard</h1>

      <p>Welcome back! Continue your learning journey.</p>

      <div style={styles.cards}>

        <div style={styles.card}>
          <h2>📐 Mathematics</h2>

          <p>
            Improve your mathematical skills through
            guided learning sessions.
          </p>

          <button>View Classes</button>
        </div>

        <div style={styles.card}>
          <h2>📚 English</h2>

          <p>
            Build your English communication,
            reading and writing skills.
          </p>

          <button>View Classes</button>
        </div>

      </div>

      <div style={styles.section}>

        <h2>Today's Attendance</h2>

        <p>Math: <strong>Present</strong></p>
        <p>English: <strong>Present</strong></p>

      </div>

      <div style={styles.section}>

        <h2>Upcoming Classes</h2>

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

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "25px",
    maxWidth: "900px",
    marginTop: "30px"
  },

  card: {
    background: "white",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
  },

  section: {
    background: "white",
    padding: "25px",
    marginTop: "25px",
    borderRadius: "16px",
    maxWidth: "850px"
  }
};

export default StudentDashboard;

