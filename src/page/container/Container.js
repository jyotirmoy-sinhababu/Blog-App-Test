import React from 'react';
import { Outlet } from 'react-router-dom';

const Container = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Container;
