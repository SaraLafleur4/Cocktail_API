<template>
    <div class="cocktail-gallery">
        <div class="gallery-options">
            <GalleryOptionSearch v-model:search="search"/>
            <GalleryOptionAFilter v-model:AChecked="AChecked" v-model:NAChecked="NAChecked"/>
            <GalleryOptionSort v-model:cocktailSortType="cocktailSortType"/>
            <button @click="resetCocktailData">reset</button>
        </div>
        
        <div class="gallery-display">
            <CocktailCard
            v-for="cocktail in organizedCocktailData" :key="cocktail.idDrink"
            :idDrink="cocktail.idDrink"
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
    .cocktail-gallery {
        margin: auto;
    }
    .gallery-options {
        display: flex;
        background-color: #D0FF45;
    }
    button {
        margin: 10px;
        background-color: #FF9245;
    }
    button:hover {
        background-color: #C445FF;
        cursor: pointer;
    }
    .gallery-display {
        display: grid;
        grid-template-columns: 324px 324px 324px;
        justify-content: space-evenly;
        gap: 20px;
        padding-top: 20px;
    }
    @media (min-width: 820px) and (max-width: 1170px) {
        .gallery-display {
            grid-template-columns: 324px 324px;
        }
    }
    @media (min-width: 290px) and (max-width: 819px) {
        .gallery-options {
            width: 324px;
            height: 103px;
            margin: auto;
        }
        button {
            position: inherit;
            margin: 35px 0 35px 238px;
        }
        .gallery-display {
            grid-template-columns: 324px;
        }
    }
</style>