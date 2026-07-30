// ============================================================
// PerfumeHub API Layer
// Handles products, authentication, local cart, orders and profile
// ============================================================


const BASE_URL =
  "https://perfumehub-api-t258.onrender.com/api";



// ============================================================
// AUTH TOKEN HELPER
// ============================================================

const getToken = () => {
  return localStorage.getItem("auth_token");
};



// ============================================================
// PRODUCTS
// ============================================================


export interface Product {

  id: string;

  name: string;

  price: number;

  scent: string;

  size: string;

  image?: string;

  category: "women" | "men" | "children";

  description?: string;

}



const mapProduct = (product:any):Product => {

  return {

    id:String(product.id),

    name:product.name,

    price:Number(product.price),

    scent:
      product.category?.name ?? "Unknown",

    size:"100ml",

    image:
      product.image_url,

    category:
      product.category?.name?.toLowerCase() === "men"
      ? "men"
      :
      product.category?.name?.toLowerCase() === "women"
      ? "women"
      :
      "children",

    description:
      product.description

  };

};





export const getProducts = async():Promise<Product[]> => {


try {


const response =
await fetch(
`${BASE_URL}/products`
);



const result =
await response.json();



console.log(
"Products:",
result
);



return result.data.products.map(mapProduct);



}catch(error){


console.error(
"Products failed:",
error
);


return [];


}


};






export const getProductById = async(
id:string
):Promise<Product | undefined>=>{


try{


const response =
await fetch(
`${BASE_URL}/products/${id}`
);



const result =
await response.json();



return mapProduct(
result.data.product
);



}catch(error){


console.error(
"Product failed:",
error
);


return undefined;


}


};






// ============================================================
// AUTHENTICATION
// ============================================================



export const loginUser = async(
email:string,
password:string
)=>{


try{


const response =
await fetch(
`${BASE_URL}/auth/login`,
{

method:"POST",

headers:{

Accept:"application/json",

"Content-Type":"application/json"

},

body:JSON.stringify({

email,

password

})


}

);



const result =
await response.json();



console.log(
"Login:",
result
);



if(response.ok){


localStorage.setItem(
"auth_token",
result.data.token
);



localStorage.setItem(
"perfume_user",
JSON.stringify(result.data.user)
);



return result;


}



return null;



}catch(error){


console.error(
"Login error:",
error
);


return null;


}


};







export const registerUser = async(
name:string,
email:string,
password:string
)=>{


try{


const response =
await fetch(
`${BASE_URL}/auth/register`,
{

method:"POST",

headers:{

Accept:"application/json",

"Content-Type":"application/json"

},


body:JSON.stringify({

name,

email,

password,

password_confirmation:
password

})


}

);



const result =
await response.json();



console.log(
"Register:",
result
);



if(response.ok){


localStorage.setItem(
"auth_token",
result.data.token
);



localStorage.setItem(
"perfume_user",
JSON.stringify(result.data.user)
);



return result.data;


}



return null;



}catch(error){


console.error(
"Register error:",
error
);


return null;


}


};






export const logoutUser = async()=>{


try{


const token =
getToken();



await fetch(
`${BASE_URL}/auth/logout`,
{

method:"POST",

headers:{

Accept:"application/json",

Authorization:
`Bearer ${token}`

}

}

);



localStorage.removeItem(
"auth_token"
);


localStorage.removeItem(
"perfume_user"
);



return true;



}catch(error){


console.error(
"Logout failed:",
error
);


return false;


}


};






export const getCurrentUser = async()=>{


try{


const token =
getToken();



if(!token){
return null;
}



const response =
await fetch(
`${BASE_URL}/auth/me`,
{

headers:{

Accept:"application/json",

Authorization:
`Bearer ${token}`

}

}

);



const result =
await response.json();



console.log(
"Current user:",
result
);



if(response.ok){

return result.data.user;

}



return null;



}catch(error){


console.error(
"Current user failed:",
error
);


return null;


}


};

// ============================================================
// LOCAL STORAGE CART
// ============================================================


export interface CartItem {

  id:string;

  product_id?:string;

  name:string;

  price:number;

  quantity:number;

  size:string;

  scent:string;

  image?:string;

}



export const getCart = ():CartItem[] => {


try{


const saved =
localStorage.getItem(
"perfume_cart"
);



return saved
? JSON.parse(saved)
: [];



}catch(error){


console.error(
"Getting cart failed:",
error
);


return [];


}


};






export const saveCart = (
cart:CartItem[]
)=>{


localStorage.setItem(
"perfume_cart",
JSON.stringify(cart)
);


};






export const addToCartLocal = (
item:CartItem
)=>{


const cart =
getCart();



const existing =
cart.find(
(product)=>
product.id === item.id
);



if(existing){


existing.quantity += item.quantity;



}else{


cart.push(item);


}



saveCart(cart);



};






export const removeFromCartLocal = (
id:string
)=>{


const cart =
getCart();



const updated =
cart.filter(
(item)=>
item.id !== id
);



saveCart(updated);



};






export const updateCartQuantityLocal = (
id:string,
quantity:number
)=>{


const cart =
getCart();



const item =
cart.find(
(product)=>
product.id === id
);



if(item){


item.quantity = quantity;


}



saveCart(cart);



};






export const clearCartLocal = ()=>{


localStorage.removeItem(
"perfume_cart"
);


};








// ============================================================
// ORDERS (LOCAL STORAGE)
// ============================================================


export interface Order {

  id:string;

  date:string;

  customer:string;

  phone:string;

  address:string;

  city:string;

  method:string;

  amount:number;

  status:string;

  items:CartItem[];

}





export const getOrders = ():Order[] => {

  try {

    const user =
      JSON.parse(
        localStorage.getItem("perfume_user") || "null"
      );


    if(!user){
      return [];
    }


    const saved =
      localStorage.getItem(
        `perfume_orders_${user.id}`
      );


    return saved
      ? JSON.parse(saved)
      : [];


  } catch(error){

    console.error(
      "Failed to get orders:",
      error
    );


    return [];

  }

};







export const saveOrder = (
  order: Order
): void => {

  try {

    const existing =
      getOrders();


    existing.unshift(order);



    const user =
      JSON.parse(
        localStorage.getItem("perfume_user") || "null"
      );


    if(!user){
      console.error("No logged in user found");
      return;
    }



    localStorage.setItem(
      `perfume_orders_${user.id}`,
      JSON.stringify(existing)
    );


  } catch(error){


    console.error(
      "Failed saving order:",
      error
    );


  }

};






export const clearOrders = ():void => {


const user =
JSON.parse(
  localStorage.getItem("perfume_user") || "null"
);


if(!user){
  return;
}


localStorage.removeItem(
  `perfume_orders_${user.id}`
);


};








// ============================================================
// PROFILE SETTINGS (LOCAL STORAGE)
// ============================================================



export interface UserProfile {


fullName:string;

email:string;

phone:string;

username:string;

joinDate:string;

favoriteScentNotes:string;

frequencyPreference:string;

deliveryAddress:string;

city:string;


}







export const getProfile = ():UserProfile=>{


const saved =
localStorage.getItem(
"user_profile_settings"
);



if(saved){


return JSON.parse(saved);


}



return {


fullName:"",

email:"",

phone:"",

username:"",

joinDate:"",

favoriteScentNotes:"",

frequencyPreference:"",

deliveryAddress:"",

city:""


};



};







export const saveProfile = (
profile:UserProfile
)=>{


localStorage.setItem(
"user_profile_settings",
JSON.stringify(profile)
);



};