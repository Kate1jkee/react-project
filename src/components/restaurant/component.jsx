import Review from "../review/component";
import Menu from "../menu/component";

const Restaurant = ({restaurant}) => {
    return (
        <div>
            <h2>{restaurant.name}</h2>
            <Menu menu={restaurant.menu} />
            <Review reviews={restaurant.reviews} />
         </div>
    )
}

export default Restaurant