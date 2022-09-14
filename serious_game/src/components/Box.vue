<!-- ------------- T E M P L A T E ------------- -->
<template>
    <div class="box">
        <div class="box_question" :class="question.theme">
            <p>Case {{ question.number }}</p>
            <component :is="activeComponent"></component>
        </div>
    </div>
    
</template>


<!-- ------------- S C R I P T ------------- -->
<script setup>
import {ref} from 'vue'
import formMultiple from '@/components/QcmMulti.vue'
import formUnique from '@/components/QcmUnique.vue'

const correspondance = {
    "form-multiple" : formMultiple,
    "form-unique" : formUnique
}

const props = defineProps(['question'])
const activeComponent = ref(correspondance[props.question.qtype])

</script>


<!-- ------------- S T Y L E ------------- -->
<style scoped lang="scss">
    $box-color:#edede9;
    .box {
        background: $box-color;
        border-radius: .5rem;
        padding: 1rem;
    }

</style>
