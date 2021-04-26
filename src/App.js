import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

function App() {
  const [likeColor, setLikeColor] = useState('');
  const handleLike = () => {
    ;
  }
  return (
    <div className="App">
      <AccessAlarmIcon/>
      <ThumbUpIcon onClick={()=> setLikeColor(likeColor ? '' : 'primary')} color={likeColor}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
