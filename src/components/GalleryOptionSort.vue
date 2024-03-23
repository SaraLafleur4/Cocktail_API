<template>
    <div class="gallery-option-sort">
        <label for="cocktail-sort">Sort by: </label>
        <select :value="cocktailSortType" @input="onCocktailSortTypeChanged" id="cocktail-sort">
            <option name="AZName" value="AZName">Name A -> Z</option>
            <option name="ZAName" value="ZAName">Name Z -> A</option>
            <option name="AZCategory" value="AZCategory">Category A -> Z</option>
            <option name="ZACategory" value="ZACategory">Category Z -> A</option>
            <option name="AZGlass" value="AZGlass">Glass A -> Z</option>
            <option name="ZAGlass" value="ZAGlass">Glass Z -> A</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'GalleryOptionSort',
        props: {
            cocktailSortType: String
        },
        emits: ["update:cocktailSortType"],
        watch: {
            cocktailSortType: function(newCocktailSortType) {
                localStorage.setItem("cocktailSortType", newCocktailSortType)
            }
        },
        methods: {
            onCocktailSortTypeChanged: function(event) {
                this.$emit('update:cocktailSortType', event.target.value)
            }
        }
    }
</script>

<style>
    .gallery-option-sort {
        display: flex;
        margin: 10px;
    }
</style>