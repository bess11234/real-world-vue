<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper m-auto size-fit">
        <nav class="flex flex-row p-3 gap-2 font-bold">
          <div>
            <RouterLink :to="{name: 'event'}" class="link">Event</RouterLink>
          </div>
          |
          <div>
            <RouterLink :to="{name: 'about'}" class="link">About</RouterLink>
          </div>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>


<style scoped>
.link:hover {
  opacity: 0.5;
}
</style>
