import React from 'react';
import { PRODUCT_CATEGORIES } from '../../constants/regularMenuItems/categoriesRegular';

import '../../css/nav_bar.css';

const CategoryBar = () => {
  return (
    <div className="main-container" >
      <div className="tab-nav-bar">
        <div className="tab-navigation">
          <i className="uil uil-angle-left left-btn"></i> 
          <i className="uil uil-angle-right right-btn"></i>
          <ul className="tab-menu">
            <li className="tab-btn"><a href="#" className="active">All</a></li>

            {PRODUCT_CATEGORIES.map((category) => (
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

export default CategoryBar;