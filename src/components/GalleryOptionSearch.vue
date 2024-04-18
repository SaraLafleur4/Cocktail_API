<template>
    <div class="gallery-option-search">
        <input type="text" id="search" :value="search" @input="onSearchChanged" placeholder="Search for a Cocktail...">
        <button v-if="search" @click="cleanSearch">clear</button>
    </div>
</template>

<script>
    export default {
        name: 'GalleryOptionSearch',
        props: {
            search: String
        },
        emits: ["update:search"],
        watch: {
            search: function(newSearch) {
                localStorage.setItem("search", newSearch)
            }
        },
        methods: {
            cleanSearch: function() {
                this.$emit('update:search', "")
            },
            onSearchChanged: function(event) {
                this.$emit('update:search', event.target.value)
            }
        }
    }
</script>

<style>
    .gallery-option-search {
        display: flex;
        margin: 10px;
    }
    button {
        background-color: #FF9245;
    }
    button:hover {
        background-color: #C445FF;
        cursor: pointer;
    }
    @media (min-width: 290px) and (max-width: 819px) {
        .gallery-option-search {
            position: absolute;
        }
    }
</style>