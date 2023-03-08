<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <h1 class="title is-3">Registration</h1>
        <form @submit.prevent="handleRegistration">
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
            <label class="label">Password again</label>
            <div class="control">
              <input
                v-model="data.passwordAgain"
                class="input"
                type="password"
              />
            </div>
          </div>
          <p
            :class="compairingPasswords"
            v-if="data.password.length > 0 && data.passwordAgain.length > 0"
          >
            {{ passwordsMatch }}
          </p>
          <div class="field">
            <div class="control">
              <button
                class="button is-primary"
                @click.prevent="handleRegistration"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";

const data = reactive({
  login: "",
  password: "",
  passwordAgain: "",
});

const passwordsMatch = computed(() => {
  if (data.password === data.passwordAgain) return "Passwords are equal";
  if (data.password != data.passwordAgain) return "Passwords are not equal";
});

const compairingPasswords = computed(() => {
  return {
    equalFields: data.password === data.passwordAgain,
    notEqualFields: data.password != data.passwordAgain,
  };
});

const handleRegistration = () => {
  if (!data.login || !data.password || !data.passwordAgain) {
    alert("Заполни все поля");
    return;
  }
  console.log("Submit register");
};
</script>

<style scoped>
.equalFields {
  color: green;
}

.notEqualFields {
  color: red;
}
</style>
