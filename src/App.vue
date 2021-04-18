<template>
  <v-app>
    <v-app-bar app dark absolute color="secondary accent-4">
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <v-btn href="/" text x-large>Chris Wood</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <a
        href="https://www.linkedin.com/in/chris-wood-520350163/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="smallicon"
          src="./assets/linkedin-icon.svg"
          alt="linkedin"
        />
      </a>
      <a
        href="https://github.com/ChrisWoody/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="smallicon"
          src="./assets/GitHub-Mark-Light-64px.png"
          alt="github"
        />
      </a>
      <v-spacer></v-spacer>
    </v-app-bar>

    <router-view />
  </v-app>
</template>
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

<script>
export default {
  name: "App",

  data: () => ({

  }),
};
</script>
