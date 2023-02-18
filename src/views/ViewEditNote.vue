<template>
  <div class="card mb-4">
    <div class="card-content is-clearfix">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            placeholder=" Add a new note, e.g. Cancel subscription"
            v-focus
            >{{ id }}</textarea
          >
        </div>
      </div>

      <div class="field is-pulled-right">
        <div class="control">
          <button class="button is-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["id"]);
</script>

<style lang="scss" scoped></style>
