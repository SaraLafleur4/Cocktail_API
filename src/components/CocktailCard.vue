<template>
    <div class="cocktail-card">
        <img class="strDrinkThumb" v-bind:src="strDrinkThumb"/>
        <div>
            <h2 class="strDrink">{{ strDrink }}</h2>
            <p class="strCategory">{{ strCategory }}</p>
            <p class="strGlass">{{ strGlass }}</p>
            <p class="strAlcoholic">{{ strAlcoholic }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CocktailCard',
        props: {
            // idDrink: String,
            strDrink: String,
            strCategory: String,
            strAlcoholic: String,
            strGlass: String,
            // strInstructions: String,
            // strIngredient1: String,
            // strIngredient2: String,
            // strIngredient3: String,
            // strIngredient4: String,
            // strIngredient5: String,
            // strIngredient6: String,
            strDrinkThumb: {type: String, default: "https://cdn-icons-png.flaticon.com/512/2193/2193419.png"}
        }
    }
</script>

<style scoped>
    .cocktail-card {
        display: flex;
    }
</style>