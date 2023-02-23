import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useStoreNotes = defineStore("storeNotes", () => {
  //STATE
  const notes = ref([
    {
      id: "id1",
      content:
        "Placeholder is also called as dummy text or filler text. It is a character, word, or string of characters that temporarily holds the place to the final data",
    },
    {
      id: "id2",
      content:
        "The placeholder text is set with the placeholder attribute, which specifies a hint that describes the expected value of an input field. Tip: The default color of the placeholder text is light grey in most browsers",
    },
    {
      id: "id3",
      content:
        "It helps preview fonts, spoof an e-mail spam filter, or reserve a specific place on a web page or other document for images, text, or some other object",
    },
  ]);

  //ACTION. To add a note by passing content and id
  const addNoteToStore = function (content, noteId) {
    let note = {};
    if (noteId === undefined) {
      let dateToId = new Date();
      note = {
        id: dateToId.toString(),
        content: content,
      };
      notes.value.unshift(note);
    } else {
      note = {
        id: noteId,
        content: content,
      };
      let noteIndex = notes.value.findIndex((note) => note.id === noteId);
      notes.value[noteIndex].content = content;
    }
  };

  //ACTION. To delete a note by id
  const deleteNoteFromStore = function (noteId) {
    let newNotes = notes.value.filter((note) => note.id != noteId);
    notes.value = newNotes;
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
  };
});
