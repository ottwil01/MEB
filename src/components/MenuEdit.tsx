import { Dropdown } from 'flowbite-react';
import { useState } from 'react';
import Menu from './Menu';
import menuData from '../assets/menu.json';

function MenuEdit() {
  const [strikethroughItems, setStrikethroughItems] = useState([]);

  const toggleStrikethrough = (itemName) => {
    setStrikethroughItems((prevItems) => {
      if (prevItems.includes(itemName)) {
        return prevItems.filter((item) => item !== itemName);
      }
      return [...prevItems, itemName];
    });
  };

  return (
    <div>
      <Menu
        menuData={menuData}
        strikethroughItems={strikethroughItems}
        toggleStrikethrough={toggleStrikethrough}
      />
    </div>
    // <div className="edit-button my-40">
    //   <div>
    //     <Dropdown placement="bottom" label="Edit">
    //       <div className="flex gap-2">
    //         <input
    //           type="checkbox"
    //           id="stock"
    //           className="appearance-none w-4 h-4 border-2 border-blue-500 rounded-sm bg-white mt-1"
    //         />
    //         <label htmlFor="stock">In Stock?</label>
    //       </div>
    //       <Dropdown.Item>Edit Item</Dropdown.Item>
    //       <Dropdown.Item>Delete Item</Dropdown.Item>
    //     </Dropdown>
    //   </div>
    // </div>
  );
}

export default MenuEdit;
