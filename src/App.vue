<template>
  <v-app>
    <v-app-bar
      app
      dark
      absolute
      color="secondary accent-4"
      >
      <v-toolbar-title>Chris Wood</v-toolbar-title>
      <v-spacer></v-spacer>
      <a href="https://www.linkedin.com/in/chris-wood-520350163/" target="_blank" rel="noopener noreferrer">
        <img class="smallicon" src="./assets/linkedin-icon.svg" alt="linkedin">
      </a>
      <a href="https://github.com/ChrisWoody/" target="_blank" rel="noopener noreferrer">
        <img class="smallicon" src="./assets/GitHub-Mark-Light-64px.png" alt="github">
      </a>
    </v-app-bar>

    <v-main>
      <HomePage/>
    </v-main>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',

  components: {
    HomePage,
  },

  data: () => ({
    
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.smallicon {
  margin: 0px 10px 0px 10px;
  width: 30px;
}
</style>
