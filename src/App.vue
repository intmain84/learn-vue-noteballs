<script setup></script>

<template>
  <Navbar />
  <div class="container is-max-desktop pt-4">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
/* 
Imoorts
*/
import Navbar from "@/components/layout/Navbar.vue";
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>
