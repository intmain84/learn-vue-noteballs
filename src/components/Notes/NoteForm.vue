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
            >{{ id ? noteContent : "" }}</textarea
          >
        </div>
      </div>
      <div class="field is-pulled-right">
        <div class="control">
          <button class="button is-primary" @click="submitNote(id)">
            {{ buttonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStoreNotes } from "@/store/storeNotes.js";

const props = defineProps(["id", "buttonText"]);

const router = useRouter();
const store = useStoreNotes();

const newNote = ref(null);

//Если компонент формы будет использоваться на странице со списком ноутов, то noteId будет undefined и в сторе выполниться условие добавления! нового ноута.
//Если компонент формы будет использоваться на странице редактирования конкретного ноута то noteId будет с айдишником и в сторе выполниться условие обновления! редактируемого ноута.
const submitNote = function (noteId = undefined) {
  store.addNoteToStore(newNote.value.value, noteId);
  newNote.value.focus();
  newNote.value.value = "";
  if (noteId) {
    router.push({ name: "notes" });
  }
};

const noteContent = computed(() => {
  const [note] = store.notes.filter((note) => note.id === props.id);
  return note.content;
});
</script>

<style scoped></style>
