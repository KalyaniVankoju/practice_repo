
import { useState } from "react";

function VolunteerDashboard() {

  const [events, setEvents] = useState([
    {
      id: 1,
      name: "English Learning Session",
      date: "20 Sep 2026"
    },
    {
      id: 2,
      name: "Tailoring Workshop",
      date: "22 Sep 2026"
    }
  ]);

  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");

  const addEvent = (e) => {

    e.preventDefault();

    if (!eventName || !eventDate) {
      alert("Please fill all fields");
      return;
    }

    const newEvent = {
      id: Date.now(),
      name: eventName,
      date: eventDate
    };

    setEvents([...events, newEvent]);

    setEventName("");
    setEventDate("");
  };

  return (
    <div style={styles.container}>

      <h1>🙋 Volunteer Dashboard</h1>

      <p>
        Help manage programs, events and community activities.
      </p>

      <div style={styles.card}>

        <h2>Add New Event</h2>

        <form onSubmit={addEvent}>

          <input
            type="text"
            placeholder="Event name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            style={styles.input}
          />

          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            style={styles.input}
          />

          <button type="submit">
            + Add Event
          </button>

        </form>

      </div>

      <div style={styles.card}>

        <h2>Upcoming Events</h2>

        {events.map((event) => (

          <div
            key={event.id}
            style={styles.event}
          >

            <strong>
              {event.name}
            </strong>

            <p>
              📅 {event.date}
            </p>

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
    fontFamily: "Arial"
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "16px",
    marginTop: "25px",
    maxWidth: "850px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
  },

  input: {
    padding: "12px",
    marginRight: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },

  event: {
    padding: "15px",
    marginTop: "10px",
    border: "1px solid #eee",
    borderRadius: "10px"
  }
};

export default VolunteerDashboard;

