import React, {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";


export interface CartItemType {

  id:string;

  name:string;

  size:string;

  scent:string;

  price:number;

  quantity:number;

  image?:string;

}



interface CartContextType {

  cartItems:CartItemType[];

  addToCart:(
    item:Omit<CartItemType,"quantity">
  )=>void;


  removeFromCart:(
    id:string
  )=>void;


  updateQuantity:(
    id:string,
    quantity:number
  )=>void;


  clearCart:()=>void;


  getCartTotal:()=>number;

}



const CartContext =
createContext<CartContextType | undefined>(undefined);




export const CartProvider:
React.FC<{children:React.ReactNode}> =
({children})=>{



const [cartItems,setCartItems] =
useState<CartItemType[]>(()=>{


const saved =
localStorage.getItem(
"perfume_cart"
);


return saved
? JSON.parse(saved)
: [];


});






// SAVE CART WHENEVER IT CHANGES

useEffect(()=>{


localStorage.setItem(
"perfume_cart",
JSON.stringify(cartItems)
);


},[cartItems]);









// ADD ITEM

const addToCart = (
newItem:Omit<CartItemType,"quantity">
)=>{


setCartItems((current)=>{


const existing =
current.find(
(item)=>
item.id === newItem.id
);



if(existing){


return current.map(
(item)=>

item.id === newItem.id

?
{
...item,
quantity:item.quantity + 1
}

:
item

);


}





return [

...current,

{
...newItem,
quantity:1
}

];


});


};









// REMOVE ITEM

const removeFromCart = (
id:string
)=>{


setCartItems((current)=>

current.filter(
(item)=>
item.id !== id
)

);


};









// CHANGE QUANTITY

const updateQuantity = (
id:string,
quantity:number
)=>{


if(quantity <= 0){

removeFromCart(id);

return;

}



setCartItems((current)=>

current.map(
(item)=>

item.id === id

?
{
...item,
quantity
}

:
item

)

);


};









// EMPTY CART

const clearCart = ()=>{


setCartItems([]);

localStorage.removeItem(
"perfume_cart"
);


};









// TOTAL PRICE

const getCartTotal = ()=>{


return cartItems.reduce(

(total,item)=>

total +
(item.price * item.quantity),

0

);


};









return(

<CartContext.Provider

value={{

cartItems,

addToCart,

removeFromCart,

updateQuantity,

clearCart,

getCartTotal

}}

>


{children}


</CartContext.Provider>


);


};









export const useCart = ()=>{


const context =
useContext(CartContext);



if(!context){

throw new Error(
"useCart must be used within CartProvider"
);

}



return context;


};