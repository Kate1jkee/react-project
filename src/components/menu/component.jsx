import Dish from '../dish/component';

const Menu = ({menu}) => {
  return (
    <div>
      <h3>Меню</h3>
        <ul>
         {menu.map((dish) => (
          <li><Dish dish={dish}/>
          </li>
        ))}
        </ul>
    </div>
  );
};
          export default Menu