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

    <input type="text" v-model="newUser" class="input_player"> <button @click="addUser" class="input_player_btn">+</button>

    <ul>
      <li v-for="(member, key) in listMembers" :key="key"> {{ member }} </li>
    </ul>

  <div>
    
      <Player v-for="(item, key) in listMembers" :key="key" :ident="key"></Player>
  </div>


</template>





<!-- ------------- S T Y L E ------------- -->
<style scoped lang="scss">
.input_player {
  margin: 1rem;
  &_btn {
    margin: 0 1rem;
    width: 1.5rem;
    height: 1.5rem;
  }
}

</style>
