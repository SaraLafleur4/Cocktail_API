<template>
  <div id="app">
    <header>
      <h1>Welcome to the Cocktail Gallery!</h1>
    </header>

    <main>
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
    background-color: #AA8367;
    padding-top: 20px;
    justify-content: space-around;
  }

  main {
    display: flex;
    background-color: #AA8367;
    width: 1024px;
    margin: auto;
  }

  footer {
    display: flex;
    height: 100px;
    text-align: center;
    background-color: #AA8367;
    padding-top: 40px;
    justify-content: space-around;
  }

  @media (max-width: 1170px) {
    main {
      width: 100%;
    }
  }
</style>