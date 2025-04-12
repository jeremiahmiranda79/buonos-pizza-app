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
      <CategoryBar />
      <div className='MenuPage'>
        <Appetizer />
        <Salad />
        <Pasta />
        <Entree />
        <Side />
        <Dessert />
      </div>
    </div>
  );
};

export default CateringItem;