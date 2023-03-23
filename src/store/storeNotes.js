import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { db } from "@/js/firebase.js";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";

import { useStoreAuth } from "@/store/storeAuth";

let userId;
let notesRef;

export const useStoreNotes = defineStore("storeNotes", () => {
  //STATE
  const notes = ref([]);

  let isProgressbar = ref(false);

  const init = async function () {
    const storeAuth = useStoreAuth();
    userId = storeAuth.currentUser.id;
    console.log(userId, "in store init()");
    notesRef = collection(db, "users", userId, "notes");
    await getAllNotesFromDb();
  };

  //ACTION. Get all notes from Firestore in realtime
  const getAllNotesFromDb = async function () {
    isProgressbar.value = true;
    let q = query(notesRef, orderBy("createdAt", "asc"));
    onSnapshot(q, (coll) => {
      let newNotes = [];

      coll.forEach((doc) => {
        newNotes.push({
          id: doc.id,
          content: doc.data().content,
          createdAt: doc.data().createdAt,
        });
      });
      notes.value = newNotes;
      isProgressbar.value = false;
    });
  };

  //ACTION. To add a note by passing content and id
  const addNoteToStore = async function (content, noteId) {
    if (noteId === undefined) {
      const createdAt = Date();
      console.log("addNote", notesRef);
      await addDoc(notesRef, {
        content,
        createdAt,
      });
    } else {
      const note = doc(db, "users", `${userId}`, "notes", noteId);
      await updateDoc(note, {
        content,
      });
    }
  };

  //ACTION. To delete a note by id
  const deleteNoteFromStore = async function (noteIdToDelete) {
    await deleteDoc(doc(db, "users", `${userId}`, "notes", noteIdToDelete));
  };

  //ACTION. To clear notes array after logout
  const clearNotes = function () {
    notes.value = [];
  };

  //GETTER. To get a note's content by id
  const getNoteContent = computed(() => {
    return (id) => {
      const [note] = notes.value.filter((note) => note.id === id);
      return note.content;
    };
  });

  //GETTER. To get total charachters
  const getTotalChar = computed(() => {
    let allContent = null;
    notes.value.forEach((note) => {
      allContent += note.content.replaceAll(/\s/g, "").length;
    });

    return allContent;
  });

  //GETTER. To get notes' quantity
  const getNotesQuantity = computed(() => {
    return notes.value.length;
  });

  return {
    init,
    notes,
    isProgressbar,
    addNoteToStore,
    deleteNoteFromStore,
    getNoteContent,
    getNotesQuantity,
    getTotalChar,
    getAllNotesFromDb,
    clearNotes,
  };
});
