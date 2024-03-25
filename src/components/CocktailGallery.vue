<template>
    <div class="cocktail-gallery">
        <div class="gallery-options">
            <GalleryOptionSearch v-model:search="search"/>
            <GalleryOptionAFilter v-model:AChecked="AChecked" v-model:NAChecked="NAChecked"/>
            <GalleryOptionSort v-model:cocktailSortType="cocktailSortType"/>
        </div>
        <button @click="resetCocktailData">reset</button>
        
        <div class="gallery-display">
            <CocktailCard
            v-for="cocktail in organizedCocktailData"
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

    import GalleryOptionSearch from '@/components/GalleryOptionSearch.vue'
    import GalleryOptionAFilter from '@/components/GalleryOptionAFilter.vue'
    import GalleryOptionSort from '@/components/GalleryOptionSort.vue'
    import CocktailCard from '@/components/CocktailCard.vue'

    export default {
        name: 'CocktailGallery',
        components: {
            GalleryOptionSearch,
            GalleryOptionAFilter,
            GalleryOptionSort,
            CocktailCard
        },
        created: async function() {
            this.retrieveCocktailData()
        },
        computed: {
            organizedCocktailData: function() {
                // search
                const filterSearch = (a) => a.strDrink.toLowerCase().includes(this.search.toLowerCase())

                // alcoholic or not
                const filterAlcoholic = (a) => {
                    if (this.AChecked && this.NAChecked) {
                        return a.strAlcoholic.toLowerCase().includes("a") // Show all
                    } else if (this.AChecked) {
                        return !a.strAlcoholic.toLowerCase().includes("no")
                    } else if (this.NAChecked) {
                        return a.strAlcoholic.toLowerCase().includes("no")
                    } else {
                        return a.strAlcoholic.toLowerCase().includes("a") // Show all
                    }
                }

                // sort
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
                let reversed = ["ZAName", "ZACategory", "ZAGlass"].includes(this.cocktailSortType) ? -1 : 1
                const comparator = (a, b) => a[field].localeCompare(b[field]) * reversed

                const data = [...this.cocktails]
                
                return data
                    .filter(filterSearch)
                    .filter(filterAlcoholic)
                    .sort(comparator)
            }
        },
        data() {
            return {
                cocktails: [],
                search: localStorage.getItem("search") || "",
                cocktailSortType: localStorage.getItem("cocktailSortType") || "AZName",
                AChecked: JSON.parse(localStorage.getItem("AChecked")) || false,
                NAChecked: JSON.parse(localStorage.getItem("NAChecked")) || false
            }
        },
        methods: {
            async retrieveCocktailData() {
                this.cocktails = await CocktailData.getCocktailData()
            },
            async resetCocktailData() {
                this.search = ""
                this.cocktailSortType = "AZName"
                this.AChecked = false
                this.NAChecked = false
            }
        }
    }
</script>

<style scoped>
    .gallery-options {
        display: flex;
        background-color: rgb(197, 255, 110);
    }
    button {
        margin: 10px;
    }
    .gallery-display {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        /* padding: 20px; */
    }
</style>