import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './page/home/Home';
import Container from './page/container/Container';
import About from './page/about/About';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Container />}>
          <Route index element={<Home />} />
          <Route path='/abt' element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
