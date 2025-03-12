import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home';
import MenuItem from '../product/MenuItem';
import CateringItem from '../product/CateringItem';
import Delivery from '../Delivery';
import About from '../About';
import Specials from '../Specials';

const userRoutes = () => {
  return (
    <>
      <Route path='/' element={ <Home /> } />

      <Route path='/menu' element={ <MenuItem /> } />

      <Route path='/catering' element={ <CateringItem /> } />

      <Route path='/delivery' element={ <Delivery /> } />

      <Route path='/about' element={
        <About /> } />

      <Route path='/specials' element={
        <Specials /> } />
    </>
  );
};

export default userRoutes;