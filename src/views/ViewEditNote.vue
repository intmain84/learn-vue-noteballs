<template>
  <NoteForm v-model="newNote">
    <template #buttons>
      <button class="button is-primary" @click="submitNote">Save</button>
    </template>
  </NoteForm>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStoreNotes } from "@/store/storeNotes.js";

const props = defineProps(["id"]);
const router = useRouter();

//NOTES
const store = useStoreNotes();

const newNote = ref("");
onMounted(() => {
  const [data] = store.notes.filter((note) => note.id === props.id);
  newNote.value = data.content;
});

const submitNote = function () {
  store.addNoteToStore(newNote.value, props.id);
  newNote.value = "";
  router.push({ name: "notes" });
};
</script>

<style lang="scss" scoped></style>
