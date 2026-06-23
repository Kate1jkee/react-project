import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { restaurants } from "../materials/mock";

const root = createRoot (document.getElementById('root'));
root.render(
    <div>
      <h1>Restaurants</h1>
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
    </div>
);

/*Отобразить все рестораны из моковых данных. Отображаем рестораны друг за другом.
Название ресторана
Заголовок - Меню (h3)
Список названий блюд (используем тег ul и li)
Заголовок - Отзывы (h3)
Список текстов отзывов (используем тег ul и li)
Создать компонент Header и Footer. Разместить их до и после ресторанов соответственно;*/