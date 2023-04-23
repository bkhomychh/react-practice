import { useDispatch, useSelector } from "react-redux"
import {getUsers} from 'redux/users/selectors'
import { deleteUser } from "redux/users/slice"

export const HomePage = () =>{
    const users = useSelector(getUsers)
    const dispatch = useDispatch()


    return (
      <div>
       <ul>
        {users.map(({id,name, age, status})=>{
          return(
            <li key={id}>
                <p>
                    {name}
                </p>
                <p>
                    {age}
                </p>
                <p>
                    {status}
                </p>
                <button onClick={() => dispatch(deleteUser(id))}>Delete</button>
            </li>
          )  
        })}
       </ul>
      </div>
    )
}