<template>
    <section>
        <RouterLink to="/event">Back</RouterLink>
        <div class="grid justify-items-center" v-if="data">
            <h1>{{ data.title }}</h1>
            <p>{{ data.description }}</p>
            <span>{{ data.location }}, @{{ data.time }} {{ data.date }}</span>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import EventService from '../services/EventService';

const props = defineProps({
    id:{
        type: Number && String,
        required: true
    }
})
const data = ref(null)

onMounted(() => {
    EventService.getEventData(props.id).then(response => {
        data.value = response.data
        console.log()
    }).catch(error => {
        console.log(error)
    })
})
</script>

<style></style>