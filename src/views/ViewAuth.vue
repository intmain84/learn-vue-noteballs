<template>
  <div class="auth">
    <div class="tabs is-medium is-centered">
      <ul>
        <li :class="{ 'is-active': currentTab === 'Login' }">
          <a @click.prevent="currentTab = 'Login'">Login</a>
        </li>
        <li :class="{ 'is-active': currentTab === 'Registration' }">
          <a @click.prevent="currentTab = 'Registration'">Registration</a>
        </li>
      </ul>
    </div>
    <component :is="tabs[currentTab]"></component>
  </div>
</template>

<script setup>
import { shallowRef } from "vue";
import Login from "@/components/forms/Login.vue";
import Registration from "@/components/forms/Registration.vue";

const tabs = {
  Login,
  Registration,
};

let currentTab = shallowRef("Login");
</script>

<style scoped>
.auth {
  max-width: 400px;
  margin: 0 auto;
}
</style>
