import { useState } from 'react'
import Header from './components/header/component';
import Footer from './components/footer/component';
import { restaurants } from "../materials/mock";

const App = ({ children }) => {
   return (
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
}

export default App
