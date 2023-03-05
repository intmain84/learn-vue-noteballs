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
} from "firebase/firestore";

const notesCollection = [db, "notes"];

export const useStoreNotes = defineStore("storeNotes", () => {
  //STATE
  const notes = ref([]);

  //ACTION. Get all notes from Firestore in realtime
  const getAllNotesFromDb = async function () {
    onSnapshot(collection(...notesCollection), (querySnaphot) => {
      let newNotes = [];
      querySnaphot.forEach((doc) => {
        newNotes.push({
          id: doc.id,
          content: doc.data().content,
        });
      });
      notes.value = newNotes;
    });
  };

  //ACTION. To add a note by passing content and id
  const addNoteToStore = async function (content, noteId) {
    if (noteId === undefined) {
      await addDoc(collection(...notesCollection), {
        content,
      });
    } else {
      const note = doc(...notesCollection, noteId);
      await updateDoc(note, {
        content,
      });
    }
  };

  //ACTION. To delete a note by id
  const deleteNoteFromStore = async function (noteIdToDelete) {
    await deleteDoc(doc(...notesCollection, noteIdToDelete));
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
    notes,
    addNoteToStore,
    deleteNoteFromStore,
    getNoteContent,
    getNotesQuantity,
    getTotalChar,
    getAllNotesFromDb,
  };
});
