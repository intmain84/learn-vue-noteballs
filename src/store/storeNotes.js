import { defineStore } from "pinia";
import { ref } from "vue";

export const useStoreNotes = defineStore("storeNotes", () => {
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
      const newNotesArray = notes.value.map((element) => {
        if (element.id === noteId) {
          element.id = noteId;
          element.content = content;
        }
        return element;
      });
      notes.value = newNotesArray;
    }
  };

  const deleteNoteFromStore = function (noteId) {
    let newNotes = notes.value.filter((note) => note.id != noteId);
    notes.value = newNotes;
  };

  return { notes, addNoteToStore, deleteNoteFromStore };
});
