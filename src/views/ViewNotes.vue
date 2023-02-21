<template>
  <div class="notes">
    <NoteForm buttonText="Add New Note"></NoteForm>
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
import Note from "@/components/Notes/Note.vue";
import { useStoreNotes } from "@/store/storeNotes.js";

//NOTES
const store = useStoreNotes();
</script>

<style scoped></style>
