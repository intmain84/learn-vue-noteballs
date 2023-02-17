<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink to="/"><img src="@/assets/logo.png" alt="" /></RouterLink>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <RouterLink class="navbar-item" to="/">Notes</RouterLink>
        <RouterLink class="navbar-item" to="/stats">Stats</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
.navbar .navbar-brand {
  width: 130px;
}
</style>
