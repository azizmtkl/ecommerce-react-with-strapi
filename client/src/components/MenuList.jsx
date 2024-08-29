import MenuItemList from "./MenuItemList";
import { Categories } from "../constants/categories.jsx";

const MenuList = () => {
  return (
    <>
      {Categories.map((item) => {
        return (
          <MenuItemList key={item.title} title={item.title} icon={item.icon} />
        );
      })}
    </>
  );
};

export default MenuList;
