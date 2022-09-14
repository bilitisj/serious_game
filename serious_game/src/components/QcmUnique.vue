<!-- ------------- T E M P L A T E ------------- -->
<template>

        <form action="" class="form " v-if="active" >
            <h4 class="form_title">Textiles. Qu'est-ce qui est vrai ?</h4>
            <div class="form_answer">
                <!--réponse A-->
                <div>
                    <input type="radio" id="reponse_a" name="reponse" value="reponse_a">
                    <label for="reponse_a">L’industrie du textile est la deuxième industrie polluante au monde</label>
                </div>
                <!--réponse B-->
                <div>
                    <input type="radio" id="reponse_b" name="reponse" value="reponse_b">
                    <label for="reponse_b">Les fibres synthétiques sont écologiques car elles permettent d’économiser les fibres naturelles (coton, lin, soie, laine, etc.).</label>
                </div>
                <!--réponse C-->
                <div>
                    <input type="radio" id="reponse_c" name="reponse" value="reponse_c">
                    <label for="reponse_c">Le polyester n’est pas polluant, contrairement au coton</label>
                </div>
            </div>

            <button class="form_btn">Valider</button>
        </form>


</template>


<!-- ------------- S C R I P T ------------- -->

<script setup>
    import {ref} from 'vue'
    const active = ref(true)


const props = defineProps(['question'])
</script>


<!-- ------------- S T Y L E ------------- -->

<style setup lang="scss">
    $colorPrincipal: hsla(160, 100%, 37%, .9);

    .questionnaire {
        position: absolute;
        width: 1000px;
        height: 1000px;
        background-color: beige;
        left: 0;
    }
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