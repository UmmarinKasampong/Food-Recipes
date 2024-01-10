<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div>
      <header>
          <Navbar/>
      </header>

      <main class="mt-10 mx-auto max-w-sm md:max-w-screen-md lg:max-w-screen-lg">
        <router-view></router-view>
      </main>
  </div>
</template>

