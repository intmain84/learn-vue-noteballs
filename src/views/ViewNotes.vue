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

    <progress
      v-if="store.isProgressbar"
      class="progress is-small is-primary"
      max="100"
    ></progress>
    <div v-else-if="store.notes.length === 0 && !store.isProgressbar">
      <p class="title is-5 my-5">You dont have any notes!</p>
    </div>

    <template v-else>
      <Note
        v-for="note in store.notes"
        :key="note.id"
        :id="note.id"
        :content="note.content"
        :date="note.createdAt"
      ></Note>
    </template>
  </div>
</template>

<script setup>
//IMPORTS
import { ref, onMounted } from "vue";
import Note from "@/components/Notes/Note.vue";
import { useStoreNotes } from "@/store/storeNotes.js";

//GET NOTES
const store = useStoreNotes();

onMounted(async () => {
  await store.getAllNotesFromDb();
});
//

//ADD NEW NOTES
const newNote = ref("");
const noteRef = ref(null);

const submitNote = function () {
  store.addNoteToStore(newNote.value);
  newNote.value = "";
  noteRef.value.setFocus();
};
//
</script>

<style scoped></style>
