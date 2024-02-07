<template>
    <div class="cocktail-gallery">
        <CocktailCard
            v-for="cocktail in cocktails"
            :strDrinkThumb="cocktail.strDrinkThumb"
            :strDrink="cocktail.strDrink"
            :strCategory="cocktail.strCategory"
            :strGlass="cocktail.strGlass"
            :strAlcoholic="cocktail.strAlcoholic" />
    </div>
</template>

<script>
    import CocktailData from '@/services/api/cocktailAPI.js'
    import CocktailCard from '@/components/CocktailCard.vue'

    export default {
        name: 'CocktailGallery',
        components: {
            CocktailCard
        },
        data() {
            return {
                cocktails: []
            }
        },
        created: async function() {
            this.retrieveCocktailData()
        },
        methods: {
            async retrieveCocktailData() {
                this.cocktails = await CocktailData.getCocktailData()
            }
        }
    }
</script>

<style scoped></style>