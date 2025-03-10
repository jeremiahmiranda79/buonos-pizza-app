import React from 'react';
import { CATEGORIES_CATERING } from '../../constants/cateringMenuItems/categoriesCatering';

import '../../css/nav_bar.css';

const CategoryBarCatering = () => {
  return (
    <div className="main-container" >
      <div className="tab-nav-bar">
        <div className="tab-navigation">
          <i className="uil uil-angle-left left-btn"></i> 
          <i className="uil uil-angle-right right-btn"></i>
          <ul className="tab-menu">
            <li className="tab-btn"><a href="#" className="active">All</a></li>

            {CATEGORIES_CATERING.map((category) => (
              <li className="tab-btn">
                <a href= {'#' + category.id}>{category.name}</a>  
              </li>
            ))}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryBarCatering;