<template>
  <div class="hello">
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
      Hello and welcome to my website! Here you'll find various projects I've worked on plus<br>
      documentation on Azure or security topics.
    </p>

    <h3 class="websitewip">Website status</h3>
    <p>I'm in the process of migrating this website to Vue so you won't see everything here just yet <br>
    but you can see the most interesting projects below.</p>

    <h3>Games</h3>
    <p><a href="https://chriswoodcodes.net/SpearCat/" target="_blank" rel="noopener noreferrer">Spear Cat</a></p>
    <p><a href="https://chriswoodcodes.net/project-sicarius-build/" target="_blank" rel="noopener noreferrer">Project Sicarius</a></p>
    <p><a href="https://chriswoodcodes.net/simon-says/" target="_blank" rel="noopener noreferrer">Simon Says</a></p>

    <h3>Programming</h3>
    <p><a href="https://github.com/ChrisWoody/ChrisWoody.github.io" target="_blank" rel="noopener noreferrer">This website!</a></p>

    <h3>Learning</h3>
    <p><a href="https://www.slideshare.net/ChrisWood262/oauth-2" target="_blank" rel="noopener noreferrer">OAuth 2 slides from a presentation I did</a></p>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
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
