import Restaurants from './components/restaurants/component';
import { restaurants } from "../materials/mock";

const App = () => {
   return (
    <div>
      <Restaurants restaurants={restaurants}/>
      </div>
   );
  };

export default App
