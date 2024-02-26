<template>
  <div id="app">
    <header>
      <h1>Welcome to the Cocktail Gallery!</h1>
    </header>

    <main>
      <h1>formulaire</h1>
      <CocktailGallery />
    </main>

    <footer>
      <p>© Sara Lafleur 2024 - IMAC 2</p>
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

<style scoped>
    header {
      display: flex;
      height: 100px;
      text-align: center;
      background-color: black;
      padding-top: 20px;
      justify-content: space-around;
    }

    main {
      width: 1024px;
    }

    footer {
      display: flexbox;
      height: 100px;
      text-align: center;
      background-color: black;
      padding-top: 40px;
      justify-content: space-around;
    }
</style>