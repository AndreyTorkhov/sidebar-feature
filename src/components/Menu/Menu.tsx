import MenuItem from "../MenuItem";
import { MENU } from "../MenuItem/data/menu.data";

function Menu() {
  return (
    <div className="rounded-lg">
      {MENU.map((item) => (
        <MenuItem item={item} key={item.link} />
      ))}
    </div>
  );
}

export default Menu;
