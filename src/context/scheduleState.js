import { useState } from "react";
import ScheduleContext from "./scheduleContext";

const ScheduleState = (props) => {
  // const host = "http://localhost:8000";
  // const host = "http://3.15.117.216:8000";
  const host = "https://sarniahindusociety.org:8000";


  const scheduleData = [];

  const [schedule, setSchedule] = useState(scheduleData);



    //Get all schedule
    const getSchedule = async () => {
      //API Call
      const response = await fetch(`${host}/api/schedules/fetchallschedule`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const json = await response.json()
    console.log(json)
    setSchedule(json)
    };
  


  //Add a schedule
  const addSchedule = async (title, time) => {
    //API Call
    const response = await fetch(`${host}/api/schedules/addschedule`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        adminToken:localStorage.getItem('adminToken'),
      },
      body: JSON.stringify({title, time}),
    });
    const schedules = await response.json();
    setSchedule(schedule.concat(schedules));
  };


    //Edit a schedule
    const editSchedule = async (id, title, time) => {
      //API Call
      const response = await fetch(`${host}/api/schedules/updateschedule/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          adminToken:localStorage.getItem('adminToken'),
        },
        body: JSON.stringify({title, time}),
      });
      const json = response.json();
      console.log(json)
  
      let newSchedule = JSON.parse(JSON.stringify(schedule))
  
      // Logic to edit in client
      for (let index = 0; index < newSchedule.length; index++) {
        const element = schedule[index];
        if (element._id === id) {
          newSchedule[index].title = title;
          newSchedule[index].time = time;
          break;
        }
      }
      setSchedule(newSchedule)
    };
  



  //Delete a schedule
  const deleteSchedule = async(id) => {
    // API Call
    const response = await fetch(`${host}/api/schedules/deleteschedule/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        adminToken:localStorage.getItem('adminToken'),
      },
    });
    const json = response.json();
    console.log(json);

    const newSchedule = schedule.filter((schedules) => {
      return schedules._id !== id;
    });
    setSchedule(newSchedule);
  };



  return (
    <ScheduleContext.Provider value={{ schedule, getSchedule, addSchedule, editSchedule, deleteSchedule }}>
      {props.children}
    </ScheduleContext.Provider>
  );
};

export default ScheduleState;
