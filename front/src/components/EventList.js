import React from "react";
import classNames from 'classnames';
import EventCard from './EventCard';

const EventList = ({options, className}) => {
  return (
    <div className={classNames(className, "overflow-y-scroll row items-center")}>
      {options.map(event => (
        <EventCard
          participants={event.participants}
          name="Music Evening"
          host={event.host}
          date={event.date}
        />
      ))}
    </div>
  );
};

export default EventList;
