<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ content }}
      </div>
      <div class="is-clearfix">
        <div class="is-pulled-right has-text-grey-light">
          {{ charQuantity }} characters
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
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup>
//IMPORTS

//PROPS
const props = defineProps({
  id: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  charQuantity: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped></style>
