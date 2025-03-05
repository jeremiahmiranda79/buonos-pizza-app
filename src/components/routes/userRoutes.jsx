import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../Home';

import MenuItem from '../product/MenuItem';
import CateringItem from '../product/CateringItem';

// import Catering from '../MenuCatering';

import Delivery from '../Delivery';
import Location from '../Location';
import Hour from '../Hour';
import Contact from '../Contact';
import About from '../About';
import Specials from '../Specials';

const userRoutes = () => {
  return (
    <>
      <Route path='/' element={ <Home /> } />

      <Route path='/menu' element={ <MenuItem /> } />

      <Route path='/catering' element={ <CateringItem /> } />

      <Route path='/delivery' element={ <Delivery /> } />

      <Route path='/location' element={ <Location /> } />

      <Route path='/hour' element={ 
        <Hour /> } />

      <Route path='/contact' element={
        <Contact /> } />

      <Route path='/about' element={
        <About /> } />

      <Route path='/specials' element={
        <Specials /> } />
    </>
  );
};

export default userRoutes;