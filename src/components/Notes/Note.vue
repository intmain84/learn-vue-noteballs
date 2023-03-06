<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ content }}
      </div>
      <div class="is-clearfix">
        <div class="is-pulled-left has-text-grey-light">
          {{ noteDate }}
        </div>
        <div class="is-pulled-right has-text-grey-light">
          {{ charQuantity }}
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        :to="{ name: 'editnote', params: { id: id } }"
        class="card-footer-item"
      >
        Edit</RouterLink
      >

      <a
        href="#"
        class="card-footer-item"
        @click.prevent="modals.deleteNote = true"
        >Delete</a
      >
    </footer>
    <Teleport to="body">
      <DeleteNoteModal
        v-model="modals.deleteNote"
        v-if="modals.deleteNote"
        @deleteNote="deleteNote(id)"
      ></DeleteNoteModal>
    </Teleport>
  </div>
</template>

<script setup>
//IMPORTS
import { computed, reactive } from "vue";
import { useDateFormat } from "@vueuse/core";
import DeleteNoteModal from "../modals/DeleteNoteModal.vue";
import { useStoreNotes } from "@/store/storeNotes.js";

//PROPS
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const store = useStoreNotes();

//Computing charachters
const charQuantity = computed(() => {
  let quantity = props.content.trim().length;
  if (quantity === 1) {
    return `${quantity} chatacter`;
  }
  return `${quantity} chatacters`;
});

//Getting date
//Version 1
// const noteDate = computed(() => {
//   let dateFormat = new Date(props.date);
//   const day = dateFormat.getDate().toString().padStart(2, "0");
//   const month = (dateFormat.getMonth() + 1).toString().padStart(2, "0");
//   const fullYear = dateFormat.getFullYear();
//   return `${day}.${month}.${fullYear}`;
// });

//Version 2
const noteDate = computed(() => {
  const formatted = useDateFormat(props.date, "DD.MM.YYYY");
  return formatted.value;
});

//Modals
const modals = reactive({
  deleteNote: false,
});
//

//Delete note
const deleteNote = (noteId) => {
  store.deleteNoteFromStore(noteId);
};
//
</script>

<style scoped></style>
