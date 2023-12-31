import { createContext, useState, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import nProgress from "nprogress";
import { db } from "../utils/dbConfig";
export const EventContext = createContext(null);

export const EventProvider = ({ children }) => {
  const [isFetchingEvents, setIsFetchingEvents] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState(null);
  const [eventBookings, setEventBookings] = useState(null);
  const [data, setData] = useState(null);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      fetchEvents();
    }
  }, [currentUser]);
  const fetchAllEducators = async () => {
    const res = await db.collection("users").get();
    const userData = [];
    res.docs.map((u) => {
      return userData.push({ ...u.data() });
    });
    return userData;
  };

  const fetchEducator = async (userId) => {
    let Eventsdata = [];
    const res = await db
      .collection("users")
      .doc(userId)
      .collection("events")
      .orderBy("timeStamp", "desc")
      .get();
    res.docs.map((event) => {
      Eventsdata.push({ ...event.data(), eventId: event.id });
    });
    return Eventsdata;
  };
  const fetchEducatorInfo = async (userId) => {
    const info = [];
    const res = (await db.collection("users").doc(userId).get()).data();
    console.log(res);
    return res;
  };
  const fetchEvents = async () => {
    setIsFetchingEvents(true);
    nProgress.start();
    let data = [];
    try {
      const res = await db
        .collection("users")
        .doc(currentUser.userId)
        .collection("events")
        .orderBy("timeStamp", "desc")
        .get();

      res.docs.map((event) => {
        data.push({ ...event.data(), eventId: event.id });
      });

      setEvents(data);
    } catch (err) {
      console.log(err.message);
    }
    nProgress.done();
    setIsFetchingEvents(false);
  };

  const fetchEventBookings = async (eventId) => {
    nProgress.start();
    let error;
    let data = [];
    try {
      const res = await db
        .collection("users")
        .doc(currentUser.userId)
        .collection("events")
        .doc(eventId)
        .collection("bookings")
        .get();

      res.docs.map((booking) => {
        data.push({ ...booking.data(), bookingId: booking.id });
      });

      setEventBookings(data);

      setEventBookings(data);
    } catch (err) {
      console.log("err");
      error = err.message;
    }
    nProgress.done();
    return {
      error: error ? error : null,
    };
  };

  const createEvent = async (eventData) => {
    setIsLoading(true);
    nProgress.start();
    let error;
    try {
      await db
        .collection("users")
        .doc(currentUser.userId)
        .collection("events")
        .add(eventData);
    } catch (err) {
      error = err.message;
    }
    fetchEvents();
    nProgress.done();
    setIsLoading(false);
    return {
      error: error ? error : null,
    };
  };

  const deleteEvent = async (eventId) => {
    setIsLoading(true);
    nProgress.start();
    await db
      .collection("users")
      .doc(currentUser.userId)
      .collection("events")
      .doc(eventId)
      .delete();
    await fetchEvents();
    nProgress.done();
    setIsLoading(false);
  };

  const fetchEventData = async (userId, eventId) => {
    nProgress.start();
    let error;

    try {
      const res1 = await db.collection("users").doc(userId).get();

      const res2 = await db
        .collection("users")
        .doc(userId)
        .collection("events")
        .doc(eventId)
        .get();

      setData({ ...res1.data(), ...res2.data() });
      console.log(res1, res2);
    } catch (err) {
      console.log(err.message);
    }
    nProgress.done();
    return {
      error: error ? error : null,
    };
  };

  return (
    <EventContext.Provider
      value={{
        isFetchingEvents,
        isLoading,
        createEvent,
        fetchEvents,
        events,
        deleteEvent,
        eventBookings,
        fetchEventBookings,
        fetchEventData,
        fetchAllEducators,
        fetchEducator,
        fetchEducatorInfo,
        data,
      }}
    >
      {!isLoading && children}
    </EventContext.Provider>
  );
};
