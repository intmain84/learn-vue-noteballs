<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-3">
      <div class="navbar-brand is-align-items-center">
        <RouterLink
          to="/"
          class="c-navbar-item is-size-3 is-family-monospace"
          >{{ burgerMenuIsActive }}</RouterLink
        >
        <a
          role="button"
          class="navbar-burger"
          ref="navbarBurger"
          :class="{ 'is-active': burgerMenuIsActive }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click.prevent="toggleBurgerMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        class="navbar-menu"
        :class="{ 'is-active': burgerMenuIsActive }"
        ref="target"
      >
        <div class="navbar-end">
          <RouterLink class="navbar-item" @click="closeMobileMenu" to="/"
            >Notes</RouterLink
          >
          <RouterLink class="navbar-item" @click="closeMobileMenu" to="/stats"
            >Stats</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const target = ref(null);
const navbarBurger = ref(null);
/*
  Burger Menu manipulation
 */
const burgerMenuIsActive = ref(false);

onClickOutside(
  target,
  () => {
    burgerMenuIsActive.value = false;
  },
  {
    ignore: [navbarBurger],
  }
);

const toggleBurgerMenu = () => {
  burgerMenuIsActive.value = !burgerMenuIsActive.value;
};
const closeMobileMenu = () => (burgerMenuIsActive.value = false);
</script>

<style scoped>
.c-navbar-item {
  color: #fff;
  font-weight: 700;
}

@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
