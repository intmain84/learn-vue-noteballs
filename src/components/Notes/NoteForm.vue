<template>
  <div class="card mb-4">
    <div class="card-content is-clearfix">
      <div class="field">
        <div class="control">
          <textarea
            :value="modelValue"
            ref="noteRef"
            @input="$emit('update:modelValue', $event.target.value)"
            class="textarea"
            placeholder=" Add a new note, e.g. Cancel subscription"
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
const props = defineProps(["id", "modelValue"]);
const emits = defineEmits(["update:modelValue"]);

const noteRef = ref(null);

const setFocus = () => {
  noteRef.value.focus();
};

defineExpose({
  setFocus,
});
</script>

<style scoped></style>
