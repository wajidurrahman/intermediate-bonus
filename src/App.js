import React, { useEffect, useState } from 'react';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

function App() {
  const [likeColor, setLikeColor] = useState('');
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [randomUser, setRandomUser] = useState({});


  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then(data => setUsers(data))

    // setSingleUser
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data=> setSingleUser(data))

    // randomUser
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data=> setRandomUser(data.results[0]));

  }, [])
  return (
    <div>
      <AccessAlarmIcon/>
      <ThumbUpIcon onClick={()=> setLikeColor(likeColor ? '' : 'primary')} color={likeColor}/>
      <h1>Name: {singleUser.name}</h1>
      <h2>Random Gender: {randomUser.name?.first} </h2>
    {
      users.map (user=> <li>{user.name}</li>)
    }
    </div>
  );
}

export default App;
