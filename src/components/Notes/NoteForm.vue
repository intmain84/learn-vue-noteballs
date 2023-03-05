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
            maxlength="100"
            >{{ modelValue ? modelValue : "" }}</textarea
          >
        </div>
      </div>
      <div
        class="characters is-pulled-left"
        :class="{ 'max-characters': charQuantity === 100 }"
      >
        {{ charQuantity }}
        {{ charQuantity === 1 ? "character" : "characters" }}
        {{ charQuantity === 100 ? "is maximum" : "" }}
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
import { ref, watch, onMounted } from "vue";
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
let charQuantity = ref(0);

const contentText = noteRef;

const setFocus = () => {
  noteRef.value.focus();
};

defineExpose({
  contentText,
  setFocus,
});

onMounted(() => {
  charQuantity.value = props.modelValue.length;
});

watch(
  () => props.modelValue,
  (res) => {
    charQuantity.value = res.length;
  }
);
</script>

<style scoped>
.max-characters {
  color: red;
}
</style>
