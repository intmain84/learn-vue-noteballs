<template>
  <NoteForm
    v-model="newNote"
    placeholder="Edit this note"
    bgColor="has-background-primary-dark"
  >
    <template #buttons>
      <RouterLink class="button is-danger mr-4" :to="{ name: 'notes' }"
        >Cancel</RouterLink
      >
      <button
        class="button is-primary"
        :disabled="!newNote"
        @click="submitNote"
      >
        Save Notes
      </button>
    </template>
  </NoteForm>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStoreNotes } from "@/store/storeNotes.js";

const props = defineProps(["id"]);
const router = useRouter();

//NOTES
const store = useStoreNotes();

const newNote = ref("");

newNote.value = store.getNoteContent(props.id);

const submitNote = function () {
  store.addNoteToStore(newNote.value, props.id);
  newNote.value = "";
  router.push({ name: "notes" });
};
</script>

<style lang="scss" scoped></style>
