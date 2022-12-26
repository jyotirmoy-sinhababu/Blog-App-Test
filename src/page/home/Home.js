import axios from 'axios';
import { useEffect, useState } from 'react';

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
      <div>
        <Nav />
      </div>
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <img className='picture' src={item.owner.picture} alt='poster' />
              <p>
                {item.owner.title} {item.owner.firstName} {item.owner.lastName}
              </p>
            </div>
            <div>
              <img className='img' src={item.image} />
              <p>{item.likes}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
