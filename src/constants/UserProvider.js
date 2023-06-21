import React, { useContext, useState, createContext } from "react";

export const ShopContext = createContext();
export const ShopContextUpdate = createContext();

export const ShopItems = () => {
  return useContext(ShopContext);
};

export const UpdateShop = () => {
  return useContext(ShopContextUpdate);
};

const testUrl = require("../../assets/images/ShopScreenImages/shopcarddata2.png");

const UserProvider = ({ children }) => {
  const [shopItems, setShopItems] = useState([]);

  const updateShop = (item) => {
    setShopItems([...shopItems, item]);
  };

  return (
    <ShopContext.Provider value={shopItems}>
      <ShopContextUpdate.Provider value={updateShop}>
        {children}
      </ShopContextUpdate.Provider>
    </ShopContext.Provider>
  );
};

export default UserProvider;
