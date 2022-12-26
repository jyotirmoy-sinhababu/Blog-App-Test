import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('https://dummyapi.io/data/v1/post?limit=10', {
      headers: { 'APP-ID': '63a99f197fbab96d709a88e7' },
    })
      .then((resp) => resp.json())
      .then((json) => console.log(json.data));
  }, []);
  return <div className='App'></div>;
}

export default App;
