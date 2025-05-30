import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { auth } from "@/js/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { useStoreNotes } from "@/store/storeNotes";

export const useStoreAuth = defineStore("storeAuth", () => {
  //STATE
  const currentUser = ref({});

  //ACTION. Observing user
  const init = () => {
    const store = useStoreNotes();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        currentUser.value.id = user.uid;
        currentUser.value.email = user.email;
        store.init();
        console.log("1");
      } else {
        currentUser.value = {};
        store.clearNotes();
        console.log("nonAuth");
      }
    });
  };

  //ACTION. Register new user
  const registerUser = async function (userData) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const userRequest = userCredential;

      return userRequest;
    } catch (error) {
      throw error;
    }
  };

  //ACTION. Login user
  const loginUser = async function (userData) {
    try {
      await signInWithEmailAndPassword(auth, userData.email, userData.password);
    } catch (error) {
      throw error;
    }
  };

  //ACTION. Logout user
  const logoutUser = () => {
    signOut(auth)
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  //GETTER
  const getUser = computed(() => {
    return currentUser;
  });

  return {
    currentUser,
    loginUser,
    logoutUser,
    getUser,
    registerUser,
    init,
  };
});
