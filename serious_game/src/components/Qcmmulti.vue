<!-- ------------- T E M P L A T E ------------- -->
<template>
    <section>
        
        <qcm></qcm>
    </section>
</template>


<!-- ------------- S C R I P T ------------- -->

<script>
    const { ref } = Vue
    const qcm = {
        name: "qcm",
        template: `
            <form action="">
                <p>Parmi les propositions suivantes, quelles sont celles que l’économie circulaire cherche à favoriser?</p>
                <p>(Plusieurs bonnes réponses)</p>
                <!--réponse A-->
                <div class="reponse_a good_answer">
                    <input type="radio" id="reponse_a" name="reponse" value="reponse_a">
                    <label for="reponse_a">A. Eco-conception</label>
                </div>
                <!--réponse B-->
                <div class="reponse_b good_answer">
                    <input type="radio" id="reponse_b" name="reponse" value="reponse_b">
                    <label for="reponse_b">B. Recyclage</label>
                </div>
                <!--réponse C-->
                <div class="reponse_c good_answer">
                    <input type="radio" id="reponse_c" name="reponse" value="reponse_c">
                    <label for="reponse_c">C. Réparation de produits</label>
                </div>
                <!--réponse D-->
                <div class="reponse_d">
                    <input type="radio" id="reponse_d" name="reponse" value="reponse_d">
                    <label for="reponse_d">D. Extraction de ressources</label>
                </div>
                <!--réponse E-->
                <div class="reponse_e">
                    <input type="radio" id="reponse_e" name="reponse" value="reponse_e">
                    <label for="reponse_e">E. Obsolescence programmée</label>
                </div>
                <button>Valider</button>
            </form>
        `
    }

    const App = Vue.createApp({
        name: "App",
        data() {
            return {

            }
        }
    }) // crée l'application
    App.mount('#app') // affiche le résultat d'application dans la div #app -> data binding
</script>


<!-- ------------- S T Y L E ------------- -->
<style scoped>

</style>
