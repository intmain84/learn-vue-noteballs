<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <h1 class="title is-3">Registration</h1>
        <form @submit.prevent="handleRegistration">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                v-model="data.email"
                class="input"
                type="email"
                @input="requestError = null"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                v-model="data.password"
                class="input"
                type="password"
                @input="requestError = null"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Password again</label>
            <div class="control">
              <input
                v-model="data.passwordAgain"
                class="input"
                type="password"
                @input="requestError = null"
              />
            </div>
          </div>
          <p
            :class="compairingPasswords"
            v-if="
              data.password.length > 0 &&
              data.passwordAgain.length > 0 &&
              !requestError
            "
          >
            {{ passwordsMatch }}
          </p>
          <p class="notEqualFields" v-if="requestError">
            {{ requestError }}
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
import { ref, reactive, computed } from "vue";
import { useStoreAuth } from "@/store/storeAuth";

const storeAuth = useStoreAuth();

const data = reactive({
  email: "",
  password: "",
  passwordAgain: "",
});

const requestError = ref(null);

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

const handleRegistration = async () => {
  if (!data.email || !data.password || !data.passwordAgain) {
    alert("Заполни все поля");
    return;
  }
  const userData = {
    email: data.email,
    password: data.password,
  };

  try {
    await storeAuth.registerUser(userData);
  } catch (error) {
    console.log("asd", error);
    if (error.code === "auth/email-already-in-use") {
      requestError.value = "This email already registered";
      return;
    }
    if (error.code === "auth/weak-password") {
      requestError.value = "Password should be at least 6 characters long";
      return;
    }
  }
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
