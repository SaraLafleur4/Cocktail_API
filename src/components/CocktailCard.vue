<template>
    <div class="cocktail-card">
        <img class="strDrinkThumb" v-bind:src="strDrinkThumb"/>
        <div>
            <h2 class="strDrink">{{ strDrink }}</h2>
            <h3 class="strCategory">{{ strCategory }}</h3>
            <h3 class="strGlass">{{ strGlass }}</h3>
            <h3 class="strAlcoholic">{{ strAlcoholic }}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CocktailCard',
        props: {
            // idDrink: {type: String, required: true},
            strDrink: {type: String, required: true},
            strCategory: String,
            strAlcoholic: String,
            strGlass: String,
            strInstructions: String,
            strIngredient1: String,
            strIngredient2: String,
            strIngredient3: String,
            strIngredient4: String,
            strIngredient5: String,
            strIngredient6: String,
            strDrinkThumb: String
        }
    }
</script>

<style scoped>
    .cocktail-card {
        display: flex;
    }
</style>