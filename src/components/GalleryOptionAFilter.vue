<template>
    <div class="gallery-option-a-filter">
        <input type="checkbox" :checked=AChecked @input="onACheckedChanged" id="alcoholic">
        <label for="alcoholic">alcoholic</label>
        <input type="checkbox" :checked=NAChecked @input="onNACheckedChanged" id="non-alcoholic">
        <label for="non-alcoholic">non-alcoholic</label>
    </div>
</template>

<script>
    export default {
        name: 'GalleryOptionAFilter',
        props: {
            AChecked: Boolean,
            NAChecked: Boolean
        },
        emits: ["update:AChecked", "update:NAChecked"],
        watch: {
            AChecked: function(newAChecked) {
                localStorage.setItem("AChecked", newAChecked)
            },
            NAChecked: function(newNAChecked) {
                localStorage.setItem("NAChecked", newNAChecked)
            }
        },
        methods: {
            onACheckedChanged: function(event) {
                this.$emit('update:AChecked', event.target.checked)
            },
            onNACheckedChanged: function(event) {
                this.$emit('update:NAChecked', event.target.checked)
            }
        }
    }
</script>

<style>
    .gallery-option-a-filter {
        display: flex;
        margin: 10px;
    }
</style>