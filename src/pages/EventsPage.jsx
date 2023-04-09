 import { useEffect } from 'react'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import {fetchEvents} from '../services/EventsApi'
 
 export function EventsPage (){
const [events, setEvents] = useState([])
useEffect(
()=>{
    fetchEvents()
    .then(res=> setEvents(res))
    .catch(err => console.log(err))
}, [] 
);


    

return(
    <div>
<ul>
    {events.map(({id,name})=>
    <li key={id}>
        <Link to={id}>{name}</Link>
    </li>
    )}
</ul>
<Outlet/>
    </div>
)
}