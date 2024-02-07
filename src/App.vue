<template>
  <div id="app">
    <header>
      <h1>header here</h1>
    </header>
    <main>
      <h2>cocktail gallery here</h2>
      <CocktailGallery />
    </main>
    <footer>
      <p>footer here</p>
    </footer>
  </div>
</template>

<script>
  import CocktailGallery from '@/components/CocktailGallery.vue'
  
  export default {
    name: 'App',
    components: {
      CocktailGallery
    }
  }
</script>