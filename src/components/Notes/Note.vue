<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ content }}
      </div>
      <div class="is-clearfix">
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
        @click.prevent="modals.deleteNoteModal = true"
        >Delete</a
      >
    </footer>
    <DeleteNoteModal
      v-model="modals.deleteNoteModal"
      v-if="modals.deleteNoteModal"
      @deleteNote="deleteNote(id)"
    ></DeleteNoteModal>
  </div>
</template>

<script setup>
//IMPORTS
import { computed, reactive } from "vue";
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

//Modals
const modals = reactive({
  deleteNoteModal: false,
});
//

//Delete note
const deleteNote = (noteId) => {
  store.deleteNoteFromStore(noteId);
};
//
</script>

<style scoped></style>
