<template>
  <v-app>
    <v-app-bar app dark absolute color="secondary accent-4">
      <v-toolbar-title>Chris Wood</v-toolbar-title>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu open-on-hover top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark v-bind="attrs" v-on="on" text> Games </v-btn>
          </template>
          <v-list dark>
            <v-list-item v-for="(game, index) in games" :key="index">
              <v-list-item-title>
                <v-btn
                  color="secondary"
                  elevation="2"
                  :href="game.url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ game.title }}
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu open-on-hover top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark v-bind="attrs" v-on="on" text> Programming </v-btn>
          </template>
          <v-list dark>
            <v-list-item v-for="(program, index) in programming" :key="index">
              <v-list-item-title :href="program.url">
                <v-btn
                  color="secondary"
                  elevation="2"
                  :href="program.url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ program.title }}
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu open-on-hover top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark v-bind="attrs" v-on="on" text> Learning </v-btn>
          </template>
          <v-list dark>
            <v-list-item v-for="(learn, index) in learning" :key="index">
              <v-list-item-title>
                <v-btn
                  color="secondary"
                  elevation="2"
                  :href="learn.url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ learn.title }}
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
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
    games: [
      { title: "Spear Cat", url: "https://chriswoodcodes.net/SpearCat/" },
      { title: "Project Sicarius", url: "https://chriswoodcodes.net/project-sicarius-build/" },
      { title: "Simon Says", url: "https://chriswoodcodes.net/simon-says/" },
    ],
    programming: [
      { title: "Project Grimaldus", url: "https://github.com/ChrisWoody/ChrisWoody.github.io" },
    ],
    learning: [
      { title: "OAuth 2 slides", url: "https://www.slideshare.net/ChrisWood262/oauth-2" },
    ],
  }),
};

</script>
