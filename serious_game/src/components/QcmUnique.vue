<template>
   <div v-if="active" class="questionnaire">QCM unique</div> 
   <h4></h4>
   <input type="radio">test
</template>

<script setup>
    import {ref} from 'vue'
    const active = ref(false)


const props = defineProps(['question'])
</script>

<style>
    .questionnaire {
        position: absolute;
        width: 1000px;
        height: 1000px;
        background-color: beige;
        left: 0;
    }
</style>