import Restaurant from '../restaurant/component';
import { useState } from 'react';

const Restaurants = ({restaurants}) => {
  const [id, setId] = useState(restaurants[0].id);
  const activeRestaurant = restaurants.find((restaurant) => restaurant.id === id);
  
    return (
      <div>
        {restaurants.map((restaurant) => (
          <button onClick={() => {
            if (restaurant.id === id) {
              return;
            }

            setId(restaurant.id);
          }}>
            {restaurant.name}
          </button>
         ))}
         <Restaurant restaurant={activeRestaurant} />
      </div>
    );
};

export default Restaurants