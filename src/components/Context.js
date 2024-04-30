import { createContext ,useState,useEffect, useContext, Children } from "react";
import App from "../App";
const newListContext =createContext();
export function useNewListContext(){
    return useContext(newListContext)
}
export default function NewListProvider({children}){
    const [likedItems, setLikedItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
  
    useEffect(() => {
  
      const storedLikedItems = JSON.parse(localStorage.getItem('likedItems'));
      if (storedLikedItems) {
        setLikedItems(storedLikedItems);
      }
  
      const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
      if (storedCartItems) {
        setCartItems(storedCartItems);
      }
    }, []);
  
    const addToLiked = (item) => {
      const updatedLiked = [...likedItems, item];
      setLikedItems(updatedLiked);
      localStorage.setItem('likedItems', JSON.stringify(updatedLiked));
  
  
    };
    console.log(likedItems)
    const moveFromLikedToCart = (item) => {
      const updatedLiked = likedItems.filter((likedItem) => likedItem.id !== item.id);
      setLikedItems(updatedLiked);
      localStorage.setItem('likedItems', JSON.stringify(updatedLiked));
  
      const updatedCart = [...cartItems, item];
      setCartItems(updatedCart);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    
    };
   
    return(
        <newListContext.Provider value={{likedItems,moveFromLikedToCart,cartItems,addToLiked}}>
         {children}
        </newListContext.Provider>
    )
}
