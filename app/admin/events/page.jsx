"use client";
import { Header } from "@/components/admin/Header/Header";
import { faCirclePlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { AddEvent } from "./addEvent";
import { useEffect, useState } from "react";
import { getEvents } from "@/actions/actions";
import { Delete } from "@/components/delete/Delete";
import { EditEvent } from "./editEvent";

export default function Events() {
  const [addEvent, setAddEvent] = useState(false);
  const [editEvent, setEditEvent] = useState(false);
  const [gE,setGE] = useState(true)
  const [loading,setLoading] = useState(true)
  const [events,setEvents] = useState([])

  const [eventDetails,setEventDetails] = useState({})

  const [openDel, setOpenDel] = useState(false);
  const section = "event";
  const [sectionId, setSectionId] = useState(null);

  useEffect(() => {
    const gEvents = async () => {
      setLoading(true);
      const events = await getEvents();
      // console.log(events)
      setEvents(events.events);
      setLoading(false);
    };
    if (gE) {
      setGE(false);
      gEvents();
    }
  }, [gE]);

  return (
    <div className="overflow-auto" style={{ height: "100svh" }}>
      {addEvent && <AddEvent setAddEvent={setAddEvent} setGE={setGE} />}

      {editEvent && <EditEvent setEditEvent={setEditEvent} setGE={setGE} eventDetails={eventDetails} />}

      {openDel && (
        <Delete
          section={section}
          sectionId={sectionId}
          setOpenDel={setOpenDel}
          setG={setGE}
        />
      )}

      <Header cPage="events" />

      <div className="sm:px-12 px-3 py-5">
        <h1 className="font-semibold text-2xl">Events</h1>
        <div className="grid sm:grid-cols-2 gap-4 mt-2">
          <div className="">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Events..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button
              onClick={() => setAddEvent(true)}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 flex gap-2 items-center h-full"
            >
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="text-sm"
                width={20}
              />
              <span>New Event</span>
            </button>
          </div>
        </div>

        <div className="relative overflow-x-auto mt-5 shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Start Time
                </th>
                <th scope="col" className="px-6 py-3">
                  End Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {events.length > 0 ? events.map((event)=>(<tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">
                  <Image
                    src={event.imageUrl}
                    width={200}
                    height={200}
                    className="w-20 h-20 rounded object-cover"
                  />
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {event.title}
                </th>

                <td className="px-6 py-4">{event.des}</td>
                <td className="px-6 py-4"> <p>{new Date(event.sDate).toDateString()}</p> <p>@ {new Date(event.sDate).toLocaleTimeString()}</p> </td>
                <td className="px-6 py-4"><p>{new Date(event.eDate).toDateString()}</p> <p>@ {new Date(event.eDate).toLocaleTimeString()}</p></td>
                <td className="px-6 py-4">
                  <button
                  onClick={()=>{setEditEvent(true); setEventDetails(event)}}
                    type="button"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                  onClick={()=>{
                    setSectionId(event.id)
                    setOpenDel(true)
                  }}
                    type="button"
                    className="font-medium text-red-600 hover:underline ms-3"
                  >
                    Remove
                  </button>
                </td>
              </tr>)) : <tr>
                <td className="px-6 py-4">
                  No Events Found
                  </td>
              </tr> }
              

              {loading && (
                <tr>
                  <td className="px-6 py-4" colSpan={6}>
                    {" "}
                    <FontAwesomeIcon
                      icon={faSpinner}
                      spin
                      className="text-lg"
                    />{" "}
                  </td>{" "}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
