import { ref, watch } from "vue";

export function useWatchCharacters(valueToWatch) {
  let charQuantity = ref(0);

  watch(valueToWatch, (res) => {
    charQuantity.value = res.length;
  });

  return { charQuantity };
}
