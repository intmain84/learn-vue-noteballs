import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { auth } from "@/js/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const useStoreAuth = defineStore("storeAuth", () => {
  //STATE
  const user = ref("");
  //ACTION. Register new user
  const registerUser = async function (userData) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const userRequest = userCredential;
      user.value = auth.currentUser;

      return userRequest;
    } catch (error) {
      throw error;
    }
  };

  //ACTION. Login user
  const loginUser = async function (userData) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const user = userCredential.user;
    } catch (error) {
      throw error;
    }
  };

  //ACTION. Logout user
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        user.value = null;
        console.log(user);
        console.log("Sign out done");
      })
      .catch((error) => {
        console.log("Sign out error");
      });
  };

  //GETTER
  const getUser = computed(() => {
    return user;
  });

  return {
    loginUser,
    logoutUser,
    getUser,
    registerUser,
  };
});
