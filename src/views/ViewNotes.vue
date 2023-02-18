<template>
  <div class="notes">
    <div class="card mb-4">
      <div class="card-content is-clearfix">
        <div class="field">
          <div class="control">
            <textarea
              class="textarea"
              placeholder=" Add a new note, e.g. Cancel subscription"
              v-focus
            ></textarea>
          </div>
        </div>

        <div class="field is-pulled-right">
          <div class="control">
            <button class="button is-primary">Add new note</button>
          </div>
        </div>
      </div>
    </div>
    <Note
      v-for="note in notes"
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
import { ref } from "vue";

//NOTES
const notes = ref([
  {
    id: "id1",
    content:
      "Placeholder is also called as dummy text or filler text. It is a character, word, or string of characters that temporarily holds the place to the final data",
    charQuantity: 95,
  },
  {
    id: "id2",
    content:
      "The placeholder text is set with the placeholder attribute, which specifies a hint that describes the expected value of an input field. Tip: The default color of the placeholder text is light grey in most browsers",
    charQuantity: 102,
  },
  {
    id: "id3",
    content:
      "It helps preview fonts, spoof an e-mail spam filter, or reserve a specific place on a web page or other document for images, text, or some other object",
    charQuantity: 89,
  },
]);
</script>

<style scoped></style>
