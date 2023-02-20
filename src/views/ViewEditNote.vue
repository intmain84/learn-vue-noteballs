<template>
  <div class="card mb-4">
    <div class="card-content is-clearfix">
      <div class="field">
        <div class="control">
          <textarea
            ref="newNote"
            class="textarea"
            placeholder=" Add a new note, e.g. Cancel subscription"
            v-focus
            >{{ noteContent }}</textarea
          >
        </div>
      </div>

      <div class="field is-pulled-right">
        <div class="control">
          <button class="button is-primary" @click="addNote">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStoreNotes } from "@/store/storeNotes.js";

const props = defineProps(["id"]);

const router = useRouter();
const route = useRoute();
const store = useStoreNotes();

const newNote = ref(null);

const addNote = () => {
  store.addNoteToStore(newNote.value.value);
  router.push({ name: "notes" });
};

const noteContent = computed(() => {
  const [note] = store.notes.filter((note) => note.id === props.id);
  return note.content;
});
</script>

<style lang="scss" scoped></style>
