import useFetchEvents from 'hooks/useFetchEvent';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EventDetailsPage = () => {
  const event = useFetchEvents();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => navigate(location?.state?.from ?? '/');

  return (
    <>
      {event && (
        <>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} />
          <p>Genre: {event.classifications[0].genre.name}</p>
          <p>Subgenre: {event.classifications[0].subGenre.name}</p>
        </>
      )}
      <button onClick={handleClick}>Back</button>
    </>
  );
};

export default EventDetailsPage;
