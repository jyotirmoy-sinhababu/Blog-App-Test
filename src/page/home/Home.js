import axios from 'axios';
import { useEffect, useState } from 'react';

import './home.css';

import Nav from '../../component/navbar/Nav';

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get('https://dummyapi.io/data/v1/post?limit=20', {
        headers: { 'APP-ID': '63a9a922c7f9125ce4736f38' },
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.data);

        setData(res.data.data);
      });
  }, []);
  // console.log(data.owner);
  return (
    <>
      <div className='home-nav-cnt'>
        <Nav />
      </div>
      <div className='home-main-cnt'>
        {' '}
        {data?.map((item) => {
          return (
            <div className='home-card-cnt' key={item.id}>
              <div className='profile-data-cnt'>
                <img
                  className='picture'
                  src={item.owner.picture}
                  alt='poster'
                />
                <p className='profile-data-txt'>
                  {item.owner.title} {item.owner.firstName}{' '}
                  {item.owner.lastName}
                </p>
              </div>
              <div className='posts-like'>
                <img className='img' src={item.image} />
                <p>{item.likes}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
