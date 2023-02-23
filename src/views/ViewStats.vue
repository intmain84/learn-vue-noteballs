<template>
  <div class="stats">
    <table class="table">
      <thead>
        <tr>
          <th>Notes Quantity</th>
          <th>Charachters summary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ notesQuantity }}</td>
          <td>{{ totalChar }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStoreNotes } from "@/store/storeNotes.js";

const store = useStoreNotes();

const notesQuantity = ref("");
const totalChar = ref("");

notesQuantity.value = store.getNotesQuantity;
totalChar.value = store.getTotalChar;
</script>

<style scoped></style>
