import React, { createContext, useContext, useState } from "react";

export interface UserProfile {
  name: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: UserProfile | null;
  register: (user: UserProfile) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

  const [user, setUser] = useState<UserProfile | null>(() => {
    const savedUser = localStorage.getItem("perfume_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });


  const register = (newUser: UserProfile) => {
    localStorage.setItem(
      "perfume_user",
      JSON.stringify(newUser)
    );

    setUser(newUser);
  };


  const login = (email:string, password:string) => {

    const savedUser = localStorage.getItem("perfume_user");

    if(!savedUser){
      return false;
    }

    const existingUser = JSON.parse(savedUser);


    if(
      existingUser.email === email &&
      existingUser.password === password
    ){
      setUser(existingUser);
      return true;
    }


    return false;
  };


  const logout = () => {
    setUser(null);
  };


  return(
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )

};


export const useAuth = () => {

  const context = useContext(AuthContext);

  if(!context){
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
};