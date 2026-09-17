
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const dashboards = [
    {
      title: "Student Dashboard",
      description: "Access your Math and English learning programs.",
      icon: "🎓",
      path: "/student-dashboard"
    },
    {
      title: "Tutor Dashboard",
      description: "Manage subjects, students and teaching activities.",
      icon: "👨‍🏫",
      path: "/tutor-dashboard"
    },
    {
      title: "Women Dashboard",
      description: "Explore skill-building and social programs.",
      icon: "👩",
      path: "/woman-dashboard"
    },
    {
      title: "Volunteer Dashboard",
      description: "Manage events and support Columbus Family programs.",
      icon: "🙋",
      path: "/volunteer-dashboard"
    }
  ];

  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Columbus Family</h1>
          <p style={styles.subtitle}>
            Community Program Management
          </p>
        </div>
      </div>

      <h2 style={styles.heading}>
        Choose Your Dashboard
      </h2>

      <p style={styles.description}>
        Select the dashboard you want to explore.
      </p>

      <div style={styles.grid}>

        {dashboards.map((dashboard) => (
          <div
            key={dashboard.path}
            style={styles.card}
            onClick={() => navigate(dashboard.path)}
          >
            <div style={styles.icon}>
              {dashboard.icon}
            </div>

            <h3>{dashboard.title}</h3>

            <p style={styles.cardText}>
              {dashboard.description}
            </p>

            <button style={styles.button}>
              Open Dashboard →
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    background: "#f5f7fb",
    fontFamily: "Arial, sans-serif"
  },

  header: {
    marginBottom: "40px"
  },

  title: {
    margin: 0,
    fontSize: "32px"
  },

  subtitle: {
    color: "#666"
  },

  heading: {
    fontSize: "26px"
  },

  description: {
    color: "#666",
    marginBottom: "30px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "25px",
    maxWidth: "900px"
  },

  card: {
    background: "white",
    padding: "30px",
    borderRadius: "16px",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
  },

  icon: {
    fontSize: "45px",
    marginBottom: "15px"
  },

  cardText: {
    color: "#666",
    lineHeight: "1.5"
  },

  button: {
    marginTop: "15px",
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    background: "#222",
    color: "white"
  }
};

export default Dashboard;

