<template>
  <div class="notes">
    <div class="card mb-4">
      <div class="card-content is-clearfix">
        <div class="field">
          <div class="control">
            <textarea
              v-model="newNote"
              ref="newNoteRef"
              class="textarea"
              placeholder=" Add a new note, e.g. Cancel subscription"
              v-focus
            ></textarea>
          </div>
        </div>

        <div class="field is-pulled-right">
          <div class="control">
            <button
              class="button is-primary"
              :disabled="!newNote"
              @click.prevent="addNote"
            >
              Add new note
            </button>
          </div>
        </div>
      </div>
    </div>
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
import Note from "../components/Note.vue";
import { useStoreNotes } from "../store/storeNotes.js";
import { ref } from "vue";

//NOTES
const store = useStoreNotes();

const newNote = ref("");
const newNoteRef = ref(null);

const addNote = () => {
  store.addNoteToStore(newNote.value);

  newNote.value = "";
  newNoteRef.value.focus();
};
</script>

<style scoped></style>
