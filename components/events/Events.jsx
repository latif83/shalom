"use client";

import { getCEvents } from "@/actions/actions";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const gEvents = async () => {
      const req = await getCEvents();
      if (req.status) {
        setEvents(req.events);
        console.log(req.events);
      }
    };

    gEvents();
  }, []);

  return (
    <div
      style={{ backgroundColor: "#002b67" }}
      className="sm:px-12 px-3 py-12 text-white relative"
    >
      <h2 className="text-xl font-bold mt-8 mb-4">Events</h2>
      <p>
        Witness our energetic congregation in action as we celebrate our faith
        and grow closer to God through our events. From weekly worship services
        to yearly celebrations, find an event that fits your calendar and come
        experience the spirit of Shalom Church.
      </p>

      {events.length > 0 ? (
        <div className="grid sm:grid-cols-2 mt-10">
          {events.map((event) => (
            <div className="border rounded flex shadow-lg bg-white">
              <Image
                src={event.imageUrl}
                alt="Image"
                width={200}
                height={200}
                className="h-60 w-auto"
              />
              <div className="p-3 text-black">
                <h1 className="text-lg font-bold">{event.title}</h1>
                <p className="mt-3">{event.des}</p>
                <div className="mt-3">
                  <h1 className="font-bold">From:</h1>
                  <p>{new Date(event.sDate).toDateString()} @ {new Date(event.sDate).toLocaleTimeString()}</p>
                </div>

                <div className="mt-3">
                  <h1 className="font-bold">To:</h1>
                  <p>{new Date(event.eDate).toDateString()} @ {new Date(event.eDate).toLocaleTimeString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="italic mt-5">
          No events at the moment, please check again later.
        </p>
      )}
    </div>
  );
};
