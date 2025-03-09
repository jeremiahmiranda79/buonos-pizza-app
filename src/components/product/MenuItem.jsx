import React from 'react';

import Pizza from '../categories/Pizza';
import SpecialtyPizza from '../categories/SpecialtyPizza';
import GlutenFree from '../categories/GlutenFree';
import PizzaSlice from '../categories/PizzaSlice';
import Appetizer from '../categories/Appetizer';
import SausageRoll from '../categories/SausageRoll';
import Calzone from '../categories/Calzone';
import Stromboli from '../categories/Stromboli';
import Salad from '../categories/Salad';
import Entree from '../categories/Entree';
import HotSub from '../categories/HotSub';
import ColdSub from '../categories/ColdSub';
import SideOrder from '../categories/SideOrder';
import Dessert from '../categories/Dessert';
import Beverage from '../categories/Beverage';
import NYSpecialty from '../categories/NYSpecialty';

import CategoryBar from '../layout/CategoryBar';

import '../../css/menu_page.css';

const MenuItem = () => {
  return (
    <div>
      <div>
        <CategoryBar />
      </div>

      <br />

      <div className='MenuPage'>
        <Pizza/>
        <br />
        <SpecialtyPizza />
        <br />
        <GlutenFree />
        <br />
        <PizzaSlice />
        <br />
        <Appetizer />
        <br />
        <SausageRoll />
        <br />
        <Calzone />
        <br />
        <Stromboli />
        <br />
        <Salad />
        <br />
        <Entree />
        <br />
        <HotSub />
        <br />
        <ColdSub />
        <br />
        <SideOrder />
        <br />
        <Dessert />
        <br />
        <Beverage />
        <br />
        <NYSpecialty />
        <br />
      </div>
    </div>
  );
}

export default MenuItem;