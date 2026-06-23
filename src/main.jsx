import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { restaurants } from "../materials/mock";
import Header from './components/header/component';
import Footer from './components/footer/component';

const root = createRoot (document.getElementById('root'));
root.render(
    <div>
      <Header>Restaurants</Header>
      {restaurants.map((restaurant) => (
      <div>
        <h2>{restaurant.name}</h2>
        <div>
         <h3>Меню</h3>
         <ul>
         {restaurant.menu.map((dish) => (
          <li>{dish.name}</li>
          ))}
         </ul>
       </div>
       <div>
        <h3>Отзывы</h3>
         <ul>
         {restaurant.reviews.map((review) => (
          <li>{review.text}</li>
          ))}
         </ul>
       </div>
      </div>
      ))}
      <Footer>Contacts</Footer>
    </div>
);
