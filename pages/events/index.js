import React, { Fragment } from "react";
import {useRouter} from 'next/router';
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
const index = () => {
  const router = useRouter();
  const eventi = getAllEvents();

  function searchEventsHandler(year,month){
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={searchEventsHandler}/>
      <EventList items={eventi} />
    </Fragment>
  );
};

export default index;
