import React, {
  createContext,
  useContext,
  useState
} from "react";

import {
  loginUser,
  registerUser,
  logoutUser
} from "../api";


// ===============================
// USER TYPE
// ===============================

export interface UserProfile {

  id:number;

  name:string;

  email:string;

}



// ===============================
// CONTEXT TYPE
// ===============================

interface AuthContextType {


  user:UserProfile | null;


  token:string | null;



  login:(
    email:string,
    password:string
  )=>Promise<boolean>;



  register:(
    name:string,
    email:string,
    password:string
  )=>Promise<boolean>;



  logout:()=>void;


}




const AuthContext =
createContext<AuthContextType | undefined>(undefined);





// ===============================
// PROVIDER
// ===============================


export const AuthProvider:React.FC<{
children:React.ReactNode
}> = ({children}) => {



const [user,setUser] =
useState<UserProfile | null>(

()=>{


const saved =
localStorage.getItem(
"perfume_user"
);



return saved
? JSON.parse(saved)
:null;


}

);






const [token,setToken] =
useState<string | null>(

()=>{


return localStorage.getItem(
"auth_token"
);


}

);







// ===============================
// LOGIN
// ===============================


const login = async(
email:string,
password:string
):Promise<boolean> => {


const result =
await loginUser(
email,
password
);



if(result){



const loggedUser =
result.data.user;


const authToken =
result.data.token;



setUser(
loggedUser
);



setToken(
authToken
);



// save again just to make sure

localStorage.setItem(
"auth_token",
authToken
);



localStorage.setItem(
"perfume_user",
JSON.stringify(loggedUser)
);



return true;


}



return false;


};









// ===============================
// REGISTER
// ===============================


const register = async(
name:string,
email:string,
password:string
):Promise<boolean>=>{


const result =
await registerUser(
name,
email,
password
);



if(result){



const registeredUser =
result.user;



const registeredToken =
result.token;




setUser(
registeredUser
);



setToken(
registeredToken
);





localStorage.setItem(
"auth_token",
registeredToken
);



localStorage.setItem(
"perfume_user",
JSON.stringify(registeredUser)
);





return true;


}



return false;


};









// ===============================
// LOGOUT
// ===============================


const logout = async()=>{


try{


await logoutUser();


}catch(error){


console.error(
"Logout API failed:",
error
);


}



// clear frontend session

localStorage.removeItem(
"auth_token"
);



localStorage.removeItem(
"perfume_user"
);



setToken(null);

setUser(null);


};








return (

<AuthContext.Provider

value={{

user,

token,

login,

register,

logout

}}

>


{children}


</AuthContext.Provider>


);


};







// ===============================
// HOOK
// ===============================


export const useAuth =()=>{


const context =
useContext(AuthContext);



if(!context){


throw new Error(
"useAuth must be used inside AuthProvider"
);


}



return context;


};