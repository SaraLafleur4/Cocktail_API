<template>
    <div class="cocktail-gallery">
        <div class="gallery-options">
            <input type="text" v-model="search" placeholder="Search for a Cocktail...">
            <button v-if="search" v-on:click="applyFilters">search</button>
            <button v-if="search" v-on:click="cleanSearch">clear</button>
            <button v-on:click="retrieveCocktailData">reset</button>

            <label for="cocktail-sort">Sort by: </label>
            <select v-model="cocktailSortType" id="cocktail-sort">
                <option name="AZName" value="AZName">Name A -> Z</option>
                <option name="ZAName" value="ZAName">Name Z -> A</option>
                <option name="AZCategory" value="AZCategory">Category A -> Z</option>
                <option name="ZACategory" value="ZACategory">Category Z -> A</option>
                <option name="AZGlass" value="AZGlass">Glass A -> Z</option>
                <option name="ZAGlass" value="ZAGlass">Glass Z -> A</option>
            </select>
            <button v-on:click="applyFilters">filter</button>
        </div>

        <div class="gallery-display">
            <CocktailCard
            v-for="cocktail in cocktails"
            :strDrink="cocktail.strDrink"
            :strCategory="cocktail.strCategory"
            :strGlass="cocktail.strGlass"
            :strAlcoholic="cocktail.strAlcoholic"
            :strDrinkThumb="cocktail.strDrinkThumb"/>
        </div>
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
        computed: {
            organizedCocktailData: function() {
                let field = ""
                if (["AZName", "ZAName"].includes(this.cocktailSortType)) {
                    field = "strDrink"
                } else if (["AZCategory", "ZACategory"].includes(this.cocktailSortType)) {
                    field = "strCategory"
                } else if (["AZGlass", "ZAGlass"].includes(this.cocktailSortType)) {
                    field = "strGlass"
                } else {
                    console.error("Unexpected value for cocktailSortType: ", this.cocktailSortType);
                }
                console.log("field = ", field)
                let reversed = ["ZAName", "ZACategory", "ZAGlass"].includes(this.cocktailSortType) ? -1 : 1
                console.log("reversed = ", reversed)
                return this.cocktails
                    .filter((a) => a.strDrink.toLowerCase().includes(this.search.toLowerCase()))
                    .sort((a, b) => a[field].localeCompare(b[field]) * reversed)
            }
        },
        data() {
            return {
                cocktails: [],
                search: "",
                cocktailSortType: "AZName"
            }
        },
        created: async function() {
            this.retrieveCocktailData()
        },
        methods: {
            async retrieveCocktailData() {
                this.cocktails = await CocktailData.getCocktailData()
                this.cleanSearch()
                this.applyFilters()
            },
            cleanSearch: function() {
                this.search = ""
            },
            applyFilters: function() {
                this.cocktails = this.organizedCocktailData
            }
        }
    }
</script>

<style scoped>
    .gallery-display {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        /* padding: 20px; */
    }
</style>