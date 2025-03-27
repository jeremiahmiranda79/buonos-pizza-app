import React from 'react';

import Appetizer from '../categoriesCatering/Appetizer';
import Salad from '../categoriesCatering/Salad';
import Pasta from '../categoriesCatering/Pasta';
import Entree from '../categoriesCatering/Entree';
import Side from '../categoriesCatering/Side';
import Dessert from '../categoriesCatering/Dessert';

import CategoryBar from '../layout/CategoryBarCatering';

import '../../css/menu_page.css';

const CateringItem = () => {
  return (
    <div>
      <div>
        <CategoryBar />
      </div>

      {/* <br /> */}

      <div className='MenuPage'>
        <Appetizer />
        <br />
        <Salad />
        <br />
        <Pasta />
        <br />
        <Entree />
        <br />
        <Side />
        <br />
        <Dessert />
        <br />
      </div>

    </div>
  );
};

export default CateringItem;