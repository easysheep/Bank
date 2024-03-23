import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth, db } from '../Firebaseconfig'; // Import your firebase config
import { ref, get, push, getDatabase } from "firebase/database";
// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component to wrap your app with
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setuserData] = useState(null);
  const [logedin, setlogedin] = useState(false);



  const fetchdata = async () => {

  
    try {
      const db = getDatabase();
      const dataRef = ref(db, `users/`);

      const dataSnapshot = await get(dataRef);
      const userData = dataSnapshot.val();

      setuserData(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  } 

  return (
    <AuthContext.Provider value={{
      currentUser,
      setCurrentUser,
      userData,
      setuserData,
      logedin,
      setlogedin
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};