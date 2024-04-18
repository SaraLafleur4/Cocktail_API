<template>
    <div class="cocktail-card">
        <img class="strDrinkThumb" v-bind:src="strDrinkThumb"/>
        <div>
            <h2 class="strDrink">{{ strDrink }}</h2>
            <p class="strCategory">Category: {{ strCategory }}</p>
            <p class="strGlass">Glass: {{ strGlass }}</p>
            <p class="strAlcoholic">Type: {{ strAlcoholic }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CocktailCard',
        props: {
            idDrink: String,
            strDrink: String,
            strCategory: String,
            strAlcoholic: String,
            strGlass: String,
            strDrinkThumb: {type: String, default: "https://cdn-icons-png.flaticon.com/512/2193/2193419.png"}
        }
    }
</script>

<style scoped>
    .cocktail-card {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        background-color: #45F0FF;
        width: 324px;
        height: 420px;
        margin: 2px;
        padding-top: 22px;
        padding-bottom: 15px;
        transition: 0.8s ease;
    }

    .cocktail-card:hover {
        background-color: #C445FF;
    }

    .strDrinkThumb {
        width: 275px;
    }
</style>