<!-- ------------- T E M P L A T E ------------- -->
<template>

    <h1>Serious Game</h1>
    <p>Entrez les noms des joueurs</p>
    <div>
    <input type="text" v-model="newUser" class="input_player"> 
    <button @click="addUser" class="input_player_btn">+</button>

        <ul>
            <li v-for="(member, key) in listMembers" :key="key"> {{ member }} </li>
        </ul>
    </div>

    <div>
        <Player v-for="(item, key) in listMembers" :key="key" :ident="key" @clickjoueur="parentjoueur"></Player>
    </div>


</template>


<!-- ------------- S C R I P T ------------- -->
<script setup>


</script>


<!-- ------------- S T Y L E ------------- -->
<style scoped>

</style>