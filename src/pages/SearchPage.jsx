import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { fetchEventsByName } from 'services/EventsApi';

const SearchPage = () => {
  const [events, setEvents] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('queryEvent');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    fetchEventsByName(searchQuery)
      .then(res => setEvents(res))
      .catch(err => console.log(err));
  }, [searchQuery]);

  const handleSubmit = evt => {
    evt.preventDefault();

    setSearchParams({
      queryEvent: evt.target.elements.searchQuery.value.trim(),
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchQuery" />
      </form>
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
    </>
  );
};

export default SearchPage;
