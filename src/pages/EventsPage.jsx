import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { fetchEvents } from '../services/EventsApi';

export function EventsPage() {
  const [events, setEvents] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchEvents()
      .then(res => setEvents(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {events.map(({ id, name }) => (
          <li key={id}>
            <Link to={id} state={{ from: location }}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
