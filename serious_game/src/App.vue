<!-- ------------- S C R I P T ------------- -->
<script setup>
  import { ref, computed } from 'vue'
  import { RouterLink,RouterView } from 'vue-router';
  import Plateau from './components/Plateau.vue';
  import Player from './components/Player.vue';
  import {useGameStore} from '@/stores/game'

  const gameStore = useGameStore()
  gameStore.getDatasApi()
  
  const members = ['Pierre', 'Jean', 'Charles']
  gameStore.addMembers(members)
  
  const listMembers = computed(() => { return gameStore.allJoueurs})
  
  const newUser = ref('')
  
  const addUser = () => {
    gameStore.addAMember(newUser.value)
  }

  const parentjoueur = (value) => {
    alert('click in joueur num ' + value)
  }
  </script>
  
  <!-- ------------- T E M P L A T E ------------- -->
<template>

  <nav class="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/plateau">Jouer</RouterLink>
    <RouterView/>
  </nav>

</template>


<!-- ------------- S T Y L E ------------- -->
<style scoped lang="scss">
.nav {
  display: inline-block;
  & a {
    margin: 1rem;
  }
}
.input_player {
  margin: 1rem;
  &_btn {
    margin: 0 1rem;
    width: 1.5rem;
    height: 1.5rem;
  }
}

</style>
