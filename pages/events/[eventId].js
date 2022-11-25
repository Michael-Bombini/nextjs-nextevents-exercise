import React, { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import { useRouter } from "next/router";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
const EventDetail = () => {
  const router = useRouter();

  const idEvento = router.query.eventId;

  const evento = getEventById(idEvento);

  if (!evento) {
    return <p>not found</p>;
  }

  return (
    <Fragment>
     
      <EventSummary title={evento.title} />
      <EventLogistics
        date={evento.date}
        address={evento.location}
        image={evento.image}
        imageAlt={evento.title}
      />
      <EventContent>
        <p>{evento.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetail;
