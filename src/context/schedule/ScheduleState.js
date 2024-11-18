//ScheduleState.js
import React, { useState } from "react";
import { toast } from "react-toastify";
import ScheduleContext from "./ScheduleContext";

const ScheduleState = (props) => {
  const host = "https://sarnia.vercel.app"; // Your API URL
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(false); // Loader state

  // Fetch all schedules
  const getSchedule = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${host}/api/schedules/fetchallschedule`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setSchedule(json);
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to fetch schedules");
    } finally {
      setLoading(false);
    }
  };

  // Add a schedule
  const addSchedule = async (title, time) => {
    setLoading(true);
    try {
      const response = await fetch(`${host}/api/schedules/addschedule`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          adminToken: localStorage.getItem("adminToken"),
        },
        body: JSON.stringify({ title, time }),
      });
      const schedules = await response.json();
      setSchedule(schedule.concat(schedules));
      toast.success("Added successfully!");
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to add schedule");
    } finally {
      setLoading(false);
    }
  };

  // Edit schedule
  const editSchedule = async (id, title, time) => {
    setLoading(true);
    try {
      const response = await fetch(`${host}/api/schedules/updateschedule/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          adminToken: localStorage.getItem("adminToken"),
        },
        body: JSON.stringify({ title, time }),
      });

      if (!response.ok) throw new Error("Failed to update schedule");

      const updatedSchedule = await response.json();

      setSchedule((prevSchedule) =>
        prevSchedule.map((item) =>
          item._id === id ? { ...item, title, time } : item
        )
      );
      toast.success("Updated successfully!");
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to update schedule");
    } finally {
      setLoading(false);
    }
  };

  // Delete a schedule
  const deleteSchedule = async (id) => {
    setLoading(true);
    try {
      await fetch(`${host}/api/schedules/deleteschedule/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          adminToken: localStorage.getItem("adminToken"),
        },
      });

      setSchedule((prevSchedule) =>
        prevSchedule.filter((item) => item._id !== id)
      );
      toast.success("Deleted successfully!");
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to delete schedule");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScheduleContext.Provider
      value={{
        schedule,
        getSchedule,
        addSchedule,
        editSchedule,
        deleteSchedule,
        loading,
      }}
    >
      {props.children}
    </ScheduleContext.Provider>
  );
};

export default ScheduleState;
