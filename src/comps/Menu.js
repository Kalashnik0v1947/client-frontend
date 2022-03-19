import React from "react";
import { Link } from "react-router-dom";
import Raw from '../assets/meat_plate.jpg'
import Fish from '../assets/chef_cooking.jpg'
import Ghoul from '../assets/chef_food_prep.jpg'
import Burgers from '../assets/burger.jpg'
import Vegetables from '../assets/mushroom_plate.jpg'
import Cakes from '../assets/dessert.jpg'
import Cookies from '../assets/dessert2.jpg'
import Spirits from '../assets/spirits.jpg'


const Menu = () => {
  return (
    <div>
      <div id="menu-container">
        <div id="menu-box">
          <img src={Raw} />
          <span>Raw</span>
        </div>
        <div id="menu-box">
          <img src={Fish} />
          <span>Fish</span>
        </div>
        <div id="menu-box">
          <img src={Ghoul} />
          <span>Ghoul Meat</span>
        </div>
        <div id="menu-box">
          <img src={Burgers} />
          <span>Burgers</span>
        </div>
      </div>
      <div id="menu-container">
        <div id="menu-box">
          <img src={Vegetables} />
          <span>Vegetables</span>
        </div>
        <div id="menu-box">
          <img src={Cakes} />
          <span>Cakes</span>
        </div>
        <div id="menu-box">
          <img src={Cookies} />
          <span>Cookies</span>
        </div>
        <div id="menu-box">
          <img src={Spirits} />
          <span>Spirits</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
