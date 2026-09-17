
function WomanDashboard() {

  const programs = [
    {
      name: "Basket Weaving",
      icon: "🧺",
      description: "Learn traditional basket weaving skills."
    },
    {
      name: "Tailoring",
      icon: "🧵",
      description: "Develop practical tailoring and sewing skills."
    },
    {
      name: "Social Skills",
      icon: "🤝",
      description: "Build communication and social confidence."
    },
    {
      name: "Arts & Crafts",
      icon: "🎨",
      description: "Explore creative arts and craft activities."
    }
  ];

  return (
    <div style={styles.container}>

      <h1>👩 Women's Dashboard</h1>

      <p>
        Explore programs and build new skills.
      </p>

      <h2>Available Programs</h2>

      <div style={styles.grid}>

        {programs.map((program) => (

          <div
            key={program.name}
            style={styles.card}
          >

            <div style={styles.icon}>
              {program.icon}
            </div>

            <h3>{program.name}</h3>

            <p>{program.description}</p>

            <button>
              Join Program
            </button>

          </div>

        ))}

      </div>

      <div style={styles.section}>

        <h2>My Programs</h2>

        <p>🧵 Tailoring</p>
        <p>🤝 Social Skills</p>

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

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "25px",
    maxWidth: "900px",
    marginTop: "25px"
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
  },

  icon: {
    fontSize: "40px"
  },

  section: {
    background: "white",
    padding: "25px",
    marginTop: "30px",
    borderRadius: "16px",
    maxWidth: "850px"
  }
};

export default WomanDashboard;

