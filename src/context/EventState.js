import { useState } from "react";
import EventContext from "./eventContext";

const EventState = (props) => {
  // const host = "http://localhost:8000";
  // const host = "http://3.15.117.216:8000";
  const host = "https://sarniahindusociety.org:8000";


  const eventsTample = [];

  const [event, setEvent] = useState(eventsTample);



    //Get all Event
    const getEvent = async () => {
      //API Call
      const response = await fetch(`${host}/api/events/fetchallevents`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const json = await response.json()
    console.log(json)
    setEvent(json)
    };
  


  // //Add a Event
  // const addEvent = async (title, description, eventDate) => {
  //   //API Call
  //   const response = await fetch(`${host}/api/events/addevent`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       adminToken:localStorage.getItem('adminToken'),
  //     },
  //     body: JSON.stringify({title, description, eventDate}),
  //   });
  //   const events = await response.json();
  //   setEvent(event.concat(events));
  // };



  //Delete a Event
  const deleteEvent = async(id) => {
    // API Call
    const response = await fetch(`${host}/api/events/deleteevent/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        adminToken:localStorage.getItem('adminToken'),
      },
    });
    const json = response.json();
    console.log(json);

    const newEvent = event.filter((events) => {
      return events._id !== id;
    });
    setEvent(newEvent);
  };



  //Edit a Event
  const editEvent = async (id, eventimage, title, date, month, description, time, address) => {
    //API Call
    const response = await fetch(`${host}/api/events/updateevent/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        adminToken:localStorage.getItem('adminToken'),
      },
      body: JSON.stringify({title, date, month, description, time, address}),
    });
    const json = response.json();
    console.log(json)

    let newEvent = JSON.parse(JSON.stringify(event))

    // Logic to edit in client
    for (let index = 0; index < newEvent.length; index++) {
      const element = event[index];
      if (element._id === id) {
        newEvent[index].title = title;
        newEvent[index].date = date;
        newEvent[index].month = month;
        newEvent[index].description = description;
        newEvent[index].time = time;
        newEvent[index].address = address;
        break;
      }
    }
    setEvent(newEvent)
  };

  return (
    <EventContext.Provider value={{ event, getEvent, deleteEvent, editEvent }}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventState;
