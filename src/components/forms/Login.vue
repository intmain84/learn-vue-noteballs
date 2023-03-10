<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <h1 class="title is-3">Login</h1>
        <form @submit.prevent="handleLogin">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input v-model="data.email" class="input" type="email" />
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input v-model="data.password" class="input" type="password" />
            </div>
          </div>
          <p class="notEqualFields" v-if="requestError">
            {{ requestError }}
          </p>
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
import { useStoreAuth } from "@/store/storeAuth";
import { useRouter } from "vue-router";

const storeAuth = useStoreAuth();

const router = useRouter();

const data = reactive({
  email: "",
  password: "",
});

const requestError = ref(null);

const handleLogin = async () => {
  if (!data.email || !data.password) {
    alert("Заполни все поля");
    return;
  }
  const userData = {
    email: data.email,
    password: data.password,
  };

  try {
    await storeAuth.loginUser(userData);
    router.push({ name: "notes" });
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      requestError.value = "User not found";
      return;
    }
    if (error.code === "auth/wrong-password") {
      requestError.value = "Wrong password";
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
