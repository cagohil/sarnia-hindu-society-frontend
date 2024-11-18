import { useState } from "react";
import { toast } from "react-toastify"; // Import toast
import EventContext from "./EventContext";

const EventState = (props) => {
  const host = "https://sarnia.vercel.app"; // Replace with your backend URL

  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(false); // Loader state

  // Get all events
  const getEvent = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${host}/api/events/fetchallevents`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setEvent(json);
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  // Add an event
  const addEvent = async (title, description, time, date, address) => {
    setLoading(true);
    try {
      const response = await fetch(`${host}/api/events/addevent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          adminToken: localStorage.getItem("adminToken"),
        },
        body: JSON.stringify({ title, description, time, date, address }),
      });

      if (!response.ok) throw new Error("Failed to add event");

      const newEvent = await response.json();
      setEvent((prevEvents) => [...prevEvents, newEvent]);
      toast.success("Event added successfully!");
    } catch (error) {
      console.error("Error adding event:", error);
      toast.error("Failed to add event");
    } finally {
      setLoading(false);
    }
  };

  // Edit an event
  const editEvent = async (id, title, description, time, date, address) => {
    setLoading(true);
    try {
      const response = await fetch(`${host}/api/events/updateevent/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          adminToken: localStorage.getItem("adminToken"),
        },
        body: JSON.stringify({ title, description, time, date, address }),
      });

      if (!response.ok) throw new Error("Failed to update event");

      const updatedEvent = await response.json();

      // Update the local state immediately
      setEvent((prevEvents) =>
        prevEvents.map((ev) =>
          ev._id === id ? { ...ev, title, description, time, date, address } : ev
        )
      );
      toast.success("Event updated successfully!");
    } catch (error) {
      console.error("Error editing event:", error);
      toast.error("Failed to update event");
    } finally {
      setLoading(false);
    }
  };

  // Delete an event
  const deleteEvent = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`${host}/api/events/deleteevent/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          adminToken: localStorage.getItem("adminToken"),
        },
      });

      if (!response.ok) throw new Error("Failed to delete event");

      setEvent((prevEvents) => prevEvents.filter((ev) => ev._id !== id));
      toast.success("Event deleted successfully!");
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Failed to delete event");
    } finally {
      setLoading(false);
    }
  };

  return (
    <EventContext.Provider
      value={{
        event,
        getEvent,
        addEvent,
        editEvent,
        deleteEvent,
        loading, // Expose loading state
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventState;
