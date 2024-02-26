<template>
    <div class="cocktail-gallery">
        <CocktailCard
            v-for="cocktail in cocktails"
            :strDrink="cocktail.strDrink"
            :strCategory="cocktail.strCategory"
            :strGlass="cocktail.strGlass"
            :strAlcoholic="cocktail.strAlcoholic"
            :strDrinkThumb="cocktail.strDrinkThumb"/>
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
                // console.log(this.cocktails[0].strDrink)
            }
        }
    }
</script>

<style scoped>
    .cocktail-gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        /* padding: 20px; */
    }
</style>