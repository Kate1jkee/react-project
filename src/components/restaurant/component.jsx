import Menu from '../menu/component';
import Reviews from '../reviews/component';

const Restaurant = ({restaurant}) => {
    return (
        <div>
            <h2>{restaurant.name}</h2>
            <Menu menu={restaurant.menu} />
            <Reviews reviews={restaurant.reviews} />
         </div>
    )
}

export default Restaurant