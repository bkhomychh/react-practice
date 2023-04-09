import useFetchEvent from 'hooks/useFetchEvent';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function EventsSubPage() {
  const event = useFetchEvent();
  const location = useLocation();

  return (
    <>
      {event && (
        <>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} width="300" />
        </>
      )}

      <Link to="details" state={location.state}>
        More info
      </Link>
    </>
  );
}
