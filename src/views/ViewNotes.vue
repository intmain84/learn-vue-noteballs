<template>
  <div class="notes">
    <NoteForm v-model="newNote" ref="noteRef">
      <template #buttons>
        <button
          class="button is-primary"
          :disabled="!newNote"
          @click="submitNote"
        >
          Add New Note
        </button>
      </template>
    </NoteForm>
    <div v-if="store.notes.length === 0">
      <p class="title is-5 my-5">You dont have any notes!</p>
    </div>
    <Note
      v-else
      v-for="note in store.notes"
      :key="note.id"
      :id="note.id"
      :content="note.content"
      :charQuantity="note.charQuantity"
    ></Note>
  </div>
</template>

<script setup>
//IMPORTS
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import { useStoreNotes } from "@/store/storeNotes.js";

//NOTES
const store = useStoreNotes();

const newNote = ref("");
const noteRef = ref(null);

const submitNote = function () {
  store.addNoteToStore(newNote.value);
  newNote.value = "";
  noteRef.value.setFocus();
};
</script>

<style scoped></style>
