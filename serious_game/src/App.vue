<!-- ------------- S C R I P T ------------- -->
<script setup>
  import { ref, computed } from 'vue'
  
  import Plateau from './components/Plateau.vue';
  import Player from './components/Player.vue';
  import {useGameStore} from '@/stores/game'
  const gameStore = useGameStore()
  
  const members = ['Pierre', 'Jean', 'Charles']
  gameStore.addMembers(members)
  
  const listMembers = computed(() => { return gameStore.allJoueurs})
  
  const newUser = ref('')
  
  const addUser = () => {
    gameStore.addAMember(newUser.value)
  }
  </script>
  
  <!-- ------------- T E M P L A T E ------------- -->
<template>

    <input type="text" v-model="newUser"> <button @click="addUser">+</button>

    <ul>
      <li v-for="(member, key) in listMembers"> {{ member }} </li>
    </ul>


  
    <Player v-for="(item, key) in listMembers" :key="key" :ident="key"></Player>



</template>





<!-- ------------- S T Y L E ------------- -->
<style scoped>

</style>
