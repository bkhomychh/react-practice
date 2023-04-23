import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {addUser} from 'redux/users/slice'


export const AddUserPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch()
  const navigate =useNavigate()
  

  const handleChange = e => {
    const { value, name } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'age') {
      setAge(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault()
    const newUser = { id: nanoid(),name, age, status:'offline'};
    dispatch(addUser(newUser))

    navigate('/')
console.log(newUser)
  }

  return (
    <form onSubmit={handleSubmit} >
      <label>
        Name:
        <input 
        onChange={handleChange}
        value={name} 
        name="name" 
        />
      </label>
      <label>
        Age:
        <input 
        onChange={handleChange}
        value={age} 
        name="age" 
        />
      </label>
      <button>Save</button>
    </form>
  );
};
