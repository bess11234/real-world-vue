<template>
    <div class="p-3">
        <h1 class="font-bold size-fit m-auto">Event for Good</h1>
        <div class="flex flex-col">
            <EventCard class="cursor-pointer transition-all hover:scale-105 m-auto" v-for="(item, index) in event" :key="index"
                :event="item" />
        </div>
    </div>
</template>

<script setup>
import EventCard from '@/components/EventCard.vue';
import { onMounted, ref } from 'vue'
import EventService  from './../services/EventService';

const event = ref(null)

onMounted(()=>{
    EventService.getEventData().then(item=>{
        event.value = item.data
    }).catch(error=>{
        console.log(error)
    })
})
</script>

<style></style>