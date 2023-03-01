<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCard">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete note?</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button is-danger" @click="handleDeleteNote">
          Delete
        </button>
        <button class="button" @click="closeModal">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { onClickOutside } from "@vueuse/core";

// Props and emits
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "deleteNote"]);
//

//Close modal
const modalCard = ref(null);

const handleKeydown = (e) => {
  if (e.key === "Escape" && props.modelValue) {
    closeModal();
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});

const closeModal = () => {
  emit("update:modelValue", false);
};

onClickOutside(modalCard, () => closeModal());
//

//Delete note
const handleDeleteNote = () => {
  emit("deleteNote");
};
//
</script>

<style scoped></style>
