<template>
  <div class="notes">
    <NoteForm ref="bbb" buttonText="Add New Note"></NoteForm>
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

const bbb = ref(null);

//NOTES
const store = useStoreNotes();
</script>

<style scoped></style>
