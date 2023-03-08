<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <h1 class="title is-3">Login</h1>
        <form @submit.prevent="handleLogin">
          <div class="field">
            <label class="label">Login</label>
            <div class="control">
              <input v-model="data.login" class="input" type="text" />
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input v-model="data.password" class="input" type="password" />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-primary" @click.prevent="handleLogin">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const data = reactive({
  login: "",
  password: "",
});

const handleLogin = () => {
  if (!data.login || !data.password) {
    alert("Заполни все поля");
    return;
  }
  console.log("Submit login");
};
</script>

<style scoped></style>
