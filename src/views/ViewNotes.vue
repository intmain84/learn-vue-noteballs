<template>
  <div class="notes">
    <!-- <NoteForm ref="bbb" buttonText="Add New Note"></NoteForm> -->
    <NoteForm v-model="newNote" ref="noteRef">
      <template #buttons>
        <button class="button is-primary" @click="submitNote">
          Add New Note
        </button>
      </template>
    </NoteForm>
    <Note
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
