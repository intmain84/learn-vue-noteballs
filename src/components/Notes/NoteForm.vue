<template>
  <div class="card mb-4" :class="bgColor">
    <div class="card-content is-clearfix">
      <div class="field">
        <div class="control">
          <textarea
            :value="modelValue"
            ref="noteRef"
            @input="$emit('update:modelValue', $event.target.value)"
            class="textarea"
            :placeholder="placeholder"
            v-focus
            >{{ modelValue ? modelValue : "" }}</textarea
          >
        </div>
      </div>
      <div class="field is-pulled-right">
        <div class="control">
          <slot name="buttons"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  id: String,
  modelValue: String,
  bgColor: String,
  placeholder: {
    type: String,
    default: "Add a new note, e.g. Cancel subscription",
  },
});
const emits = defineEmits(["update:modelValue"]);

const noteRef = ref(null);

const contentText = noteRef;

const setFocus = () => {
  noteRef.value.focus();
};

defineExpose({
  contentText,
  setFocus,
});
</script>

<style scoped></style>
