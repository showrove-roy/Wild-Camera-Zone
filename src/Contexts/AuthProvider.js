import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

const AuthContext = createContext(); // create context

const auth = getAuth(app); //get auth with passing app from firebase config

export const useAuth = () => useContext(AuthContext); //use context and export for use enter website

const AuthProvider = ({ children }) => {
  // Loading state
  const [loading, setLoading] = useState(true);
  // stored login user
  const [user, setUser] = useState();

  //Create a new user's using email address and password
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const logIN = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Update User Profile
  const updateUserProfile = (userDetails) => {
    setLoading(true);
    return updateProfile(auth.currentUser, userDetails);
  };

  // Google login
  const googleProvider = new GoogleAuthProvider();
  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Get current user info
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // JWT token create
  const createJWT = (email) => {
    fetch(`https://wild-camera-zone-server.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("jwToken", data.accessToken);
        }
      })
      .catch((err) => console.error(err));
  };
  // create a object for sharing function and data from one place
  const authInfo = {
    createNewUser,
    logIN,
    user,
    logOut,
    updateUserProfile,
    googleLogIn,
    loading,
    setLoading,
    createJWT,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
