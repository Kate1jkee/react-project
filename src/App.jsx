import Header from './components/header/component';
import Footer from './components/footer/component';
import Restaurants from './components/restaurants/component';
import { restaurants } from "../materials/mock";

const App = () => {
   return (
    <div>
      <Header>Restaurants</Header>
      <Restaurants restaurants={restaurants}/>
      <Footer>Contacts</Footer>
      </div>
   );
  };

export default App
