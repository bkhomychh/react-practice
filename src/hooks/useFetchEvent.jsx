import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventById } from '../services/EventsApi';

const useFetchEvents = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchEventById(id).then(res => setEvent(res));
  }, [id]);
  return event;
};

export default useFetchEvents;
