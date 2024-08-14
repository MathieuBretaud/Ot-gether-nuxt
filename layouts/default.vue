<template>
  <div>
    <nav-bar/>
<!--    <AppHeader />-->
    <slot />
<!--    <AppFooter />-->
  </div>
</template>
<script setup lang="ts">
import NavBar from "~/layouts/navBar.vue";
</script>