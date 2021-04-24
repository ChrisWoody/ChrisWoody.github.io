<template>
  <div>

    <h1>Chris Wood</h1>
    <p>
        <a href="https://www.linkedin.com/in/chris-wood-520350163/" target="_blank" rel="noopener noreferrer">
          <img class="smallicon" src="../assets/linkedin-icon.svg" alt="linkedin">
        </a>
        <a href="https://github.com/ChrisWoody/" target="_blank" rel="noopener noreferrer">
          <img class="smallicon" src="../assets/GitHub-Mark-64px.png" alt="github">
        </a>
    </p>
    <p>
      Hello and welcome to my website! Here you'll find various projects I've worked on plus documentation on Azure or security topics.
    </p>

    <HomeSection title="Games" v-bind:items="games" />
    <HomeSection title="Programming" v-bind:items="programmings" />
    <HomeSection title="Learning" v-bind:items="learnings" />
    <HomeSection title="Electronics" v-bind:items="electronics" />
    <HomeSection title="Props" v-bind:items="props" />

  </div>
</template>

<script>
import HomeSection from "@/components/HomeSection.vue";
export default {
  name: 'HomePage',
  components: {
    HomeSection,
  },
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
      { title: "OAuth 2 slides", imagesrc: require('../assets/oauth2-slides-icon.jpg'), description: "Slides for an internal presentation I did on OAuth 2, explaining the different grant types and why some are better than others, plus some detail around JWT tokens", slidesurl: "https://www.slideshare.net/ChrisWood262/oauth-2"}
    ],
    electronics: [
      { title: "Light Box", imagesrc: require('../assets/lightbox/lightbox-rainbow-1.jpg'), description: "Light Box is an electronics project that allows people to interact with a LED strip with some dials and a button to toggle programs, where they can change the colours that appear to the speed of sequeneces and even the LEDs that appear.", readmoreurl: "/electronics/lightbox", githuburl: "https://gist.github.com/ChrisWoody/4409806fbc3860d5780e14eb9f3f77a0"}
    ],
    props: [
      { title: "Foam Sword", imagesrc: require('../assets/foam-sword.jpg'), description: "A basic sword made out of foam and PVC pipe, along with faux leather for the handle. It was a good entry into the prop making world.", youtubeurl: "https://www.youtube.com/watch?v=yU1h_eh4iKE"},
      { title: "W40k Pauldron", imagesrc: require('../assets/w40kpauldron/website-icon.jpg'), description: "A foam prop in the style of a Warhammer 40k Pauldron, painted with the livery of the Salamanders Space Marines chapter.", readmoreurl: "/props/w40kpauldron"}
    ]
  })
}
</script>

<style scoped>

</style>
