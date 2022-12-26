import axios from 'axios';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    axios
      .get('https://dummyapi.io/data/v1/post?limit=10', {
        headers: { 'APP-ID': '63a9a922c7f9125ce4736f38' },
      })
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  return <div></div>;
};

export default Home;
