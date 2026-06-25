          
          const Menu = ({menu}) => {
            return (
            <div>
             <h3>Меню</h3>
             <ul>
             {menu.map((dish) => (
              <li>{dish.name}</li>
              ))}
             </ul>
           </div>
            )
          }
          
          export default Menu