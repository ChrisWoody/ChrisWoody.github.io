<template>
  <div class="hello">

<h3 class="websitewip">Website status</h3>
    <p>I'm in the process of migrating this website to Vue so you won't see everything here just yet but you can see the most interesting projects below.</p>

    <h1>Chris Wood</h1>
    <p>
        <a href="https://www.linkedin.com/in/chris-wood-520350163/" target="_blank" rel="noopener noreferrer">
          <img class="smallicon" src="../assets/linkedin-icon.svg" alt="linkedin">
        </a>
        <a href="https://github.com/ChrisWoody/" target="_blank" rel="noopener noreferrer">
          <img class="smallicon" src="../assets/github-icon.svg" alt="github">
        </a>
    </p>
    <p>
      Hello and welcome to my website! Here you'll find various projects I've worked on plus documentation on Azure or security topics.
    </p>

    <h2>Games</h2>
    <v-container style="max-width: 1000px">
        <v-row no-gutters class="justify-center">
            <v-col v-for="game in games" :key="game.title" cols="1" class="widecard">
                <v-card class="pa-2 cardmargin" max-width="300">                    
                    <v-img :src="game.imagesrc" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)">
                        <v-card-title v-text="game.title"></v-card-title>
                    </v-img>
                    <v-card-text v-text="game.description"></v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" elevation="2" :href="game.playurl" target="_blank" rel="noopener noreferrer">
                            <v-icon left>
                                mdi-controller-classic
                            </v-icon>
                            Play
                        </v-btn>
                        <v-btn color="secondary" elevation="2" :href="game.githuburl" target="_blank" rel="noopener noreferrer">
                            <v-icon left>
                                mdi-github
                            </v-icon>
                            View Code
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <h2>Programming</h2>
    <v-container style="max-width: 1000px">
        <v-row no-gutters class="justify-center">
            <v-col v-for="programming in programmings" :key="programming.title" cols="1" class="widecard">
                <v-card class="pa-2 cardmargin" max-width="300">                    
                    <v-img :src="programming.imagesrc" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)">
                        <v-card-title v-text="programming.title"></v-card-title>
                    </v-img>
                    <v-card-text v-text="programming.description"></v-card-text>
                    <v-card-actions>
                        <v-btn color="secondary" elevation="2" :href="programming.githuburl" target="_blank" rel="noopener noreferrer">
                            <v-icon left>
                                mdi-github
                            </v-icon>
                            View Code
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <h2>Learning</h2>
    <v-container style="max-width: 1000px">
        <v-row no-gutters class="justify-center">
            <v-col v-for="learning in learnings" :key="learning.title" cols="1" class="widecard">
                <v-card class="pa-2 cardmargin" max-width="300">                    
                    <v-img :src="learning.imagesrc" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)">
                        <v-card-title v-text="learning.title"></v-card-title>
                    </v-img>
                    <v-card-text v-text="learning.description"></v-card-text>
                    <v-card-actions>
                        <v-btn color="secondary" elevation="2" :href="learning.githuburl" target="_blank" rel="noopener noreferrer">
                            <v-icon left>
                                mdi-presentation
                            </v-icon>
                            View
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

  </div>
</template>

<script>
export default {
  name: 'HomePage',

  data: () => ({
    games: [
      { title: "Spear Cat", imagesrc: require("../assets/spear-cat-icon.jpg"), description: "Play as a Cat with a Spear to fight off the endless alien hordes", playurl: "https://chriswoodcodes.net/SpearCat/", githuburl: "https://github.com/ChrisWoody/SpearCat/"},
      { title: "Project Sicarius", imagesrc: require("../assets/project-sicarius-icon.jpg"), description: "Play as an Angel who has to take out the invading Demons", playurl: "https://chriswoodcodes.net/project-sicarius-build/", githuburl: "https://github.com/ChrisWoody/project-sicarius/"},
      { title: "Simon Says", imagesrc: require("../assets/simon-says-icon.jpg"), description: "Play the classic Simon Says game", playurl: "https://chriswoodcodes.net/simon-says/", githuburl: "https://github.com/ChrisWoody/simon-says/"},
    ],
    programmings: [
      { title: "Project Grimaldus", imagesrc: require('../assets/project-grimaldus-icon.jpg'), description: "This website! It's changed frameworks and looks over the years with the current plan to get it running fully in Vue", githuburl: "https://github.com/ChrisWoody/ChrisWoody.github.io"}
    ],
    learnings: [
      { title: "OAuth 2 slides", imagesrc: require('../assets/oauth2-slides-icon.jpg'), description: "Slides for an internal presentation I did on OAuth 2, explaining the different grant types and why some are better than others, plus some detail around JWT tokens", url: "https://www.slideshare.net/ChrisWood262/oauth-2"}
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.websitewip {
    color: orange;
}
.smallicon {
  margin: 0px 10px 0px 10px;
  width: 30px;
}
.widecard {
    max-width: 100%;
}
.cardmargin {
    margin: 5px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
