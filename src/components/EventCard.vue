<template>
  <div class="size-1/4">
    <RouterLink :to="{name: 'event-details', params: {id : event.id}}">
      <div class="p-5 m-3 px-10 outline outline-1 outline-offset-2 outline-black hover:shadow-lg">
        <div class="grid justify-items-center">
          <h2 class="text-xl mb-1">{{ event.title }}</h2>
          <span class="opacity-50">@{{ event.time }} {{ event.date }}</span>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  event: {
    type: Object,
    required: true
  }
})
</script>

<style></style>