<!-- ------------- T E M P L A T E ------------- -->
<template>
    <div>
        <h1>Serious Game</h1>
        <Box v-for="(question, key) in allQ" :key="key" :question="question"></Box>
    </div>
</template>


<!-- ------------- S C R I P T ------------- -->
<script setup>
    
    import Box from '@/components/Box.vue';
    
    import {useGameStore} from '@/stores/game'

    const gameStore = useGameStore()
    console.log(gameStore)

    const allQ = gameStore.allDatasApi

</script>


<!-- ------------- S T Y L E ------------- -->
<style scoped>

</style>