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
import { onMounted } from "vue";
import { useStoreAuth } from "@/store/storeAuth.js";
import Navbar from "@/components/layout/Navbar.vue";

const storeAuth = useStoreAuth();

onMounted(() => {
  storeAuth.init();
});
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>
