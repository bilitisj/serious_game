<!-- ------------- T E M P L A T E ------------- -->
<template>
    <p>{{thePlayer}}</p>
</template>


<!-- ------------- S C R I P T ------------- -->
<script setup>
    import {useGameStore} from '@/stores/game'
    const gameStore = useGameStore()

    const props = defineProps(['ident'])
    const thePlayer = gameStore.oneJoueur(props.ident)

</script>


<!-- ------------- S T Y L E ------------- -->
<style scoped lang="scss">

</style>
