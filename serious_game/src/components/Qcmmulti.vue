<!-- ------------- T E M P L A T E ------------- -->
<template>
    
    <form action="" class="form">
        <h4 class="form_title">Parmi les propositions suivantes, quelles sont celles que l’économie circulaire cherche à favoriser?</h4>
        <p>(Plusieurs bonnes réponses)</p>
        <div class="form_answer">
            <!--réponse A-->
            <div>
                <input type="checkbox" id="reponse_a" name="reponse" value="reponse_a">
                <label for="reponse_a">A. Eco-conception</label>
            </div>
            <!--réponse B-->
            <div>
                <input type="checkbox" id="reponse_b" name="reponse" value="reponse_b">
                <label for="reponse_b">B. Recyclage</label>
            </div>
            <!--réponse C-->
            <div>
                <input type="checkbox" id="reponse_c" name="reponse" value="reponse_c">
                <label for="reponse_c">C. Réparation de produits</label>
            </div>
            <!--réponse D-->
            <div>
                <input type="checkbox" id="reponse_d" name="reponse" value="reponse_d">
                <label for="reponse_d">D. Extraction de ressources</label>
            </div>
            <!--réponse E-->
            <div>
                <input type="checkbox" id="reponse_e" name="reponse" value="reponse_e">
                <label for="reponse_e">E. Obsolescence programmée</label>
            </div>
        </div>

        <button class="form_btn">Valider</button>
    </form>
</template>


<!-- ------------- S C R I P T ------------- -->
<script setup>
import {ref} from 'vue'
const props = defineProps(['question'])


</script>

<!-- ------------- S T Y L E ------------- -->
<style scoped lang="scss">
    $colorPrincipal: hsla(160, 100%, 37%, .9);
    .form {
        display: grid;
        &_title {
            font-weight: 800;

        }
        &_answer {
            margin: 1rem;
            & div {
                margin: .5rem 0;
                & input {
                    margin-right: .5rem;
                }
            }
        }
        &_btn {
            border: none;
            border-radius: 5%;
            background: $colorPrincipal;
            color: white;
            padding: .5rem;
            width: 5rem;
            display: grid;
            justify-self: end;
        }
    }
</style>
