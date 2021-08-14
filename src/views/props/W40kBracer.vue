<template>
  <div style="text-align: left; max-width: 900px; margin: 10px">
    <h1>W40k Bracer</h1>

    <h3>What and why</h3>
    <p>
      I love Warhammer and I enjoy making things so I've been keen for a while
      to create something Warhammer-themed using foam. In this case I've created
      a Bracer armour piece for a Space Marine, specifically from the
      Salamanders chapter which is one of my favorites!
    </p>

    <h3>How</h3>
    <p>
      I largely followed a set of instructions from a sample kit of foam I got a while ago by Kamui Cosplay. It was a good entry point to prop making because it goes through all the key steps in the process. I did a similar prop like this previously following those instructions but made some mistakes, which I made sure not to do again!
      The major change in this project from last time is the addition of the foam scales. Lumins Workshop has a pre-cut pack of these, so I just had to glue them all on. Though it was a bit of a mess with the glue, it was mostly covered by the spray paint.
    </p>

    <h3>Learnings</h3>
    <p>
        <ul>
            <li>Don't spray paint when it's raining! The moisture impacted the paint a lot, so the metalic gold paint I was using ended up being matte browny-gold. I was able to fix it just by spraying again in dryer weather.</li>
            <li>When cutting out the foam from the template, add at least 10mm either side to take into account the width of the foam when it is heat molded. I had to cut a second piece once I realised the foam wasn't fitting my arm properly.</li>
        </ul>
    </p>

    <h3>Learnings going into the project</h3>
    <p>
        I've attempted a similar project before, here is what I made sure to do this time around that I learnt from that.
        <ul>
            <li>For the edges cut them out extra long, because heating and molding them will cause it to shrink. Once glued on the excess foam can be cut off.</li>
            <li>Spend extra time to heat hold the foam into shape, using plently of heat to mold things properly, otherwise the foam will try to flatten itself.</li>
            <li>Once in shape, keep the foam in that shape for as long as possible. I used masking tape in various spots the entire time to make sure it didn't try to flatten itself out.</li>
            <li>Using spray paint instead of acrylic paint, makes it easier to have shaded areas and doesn't leave brush lines. I achieved this by spray a darker green from one angle then the main lighter green from another.</li>
        </ul>
    </p>

    <h3>Checkout the build process (mostly) step-by-step</h3>

    <div v-for="step in steps" :key="step.imageurl">
      <v-card class="pa-2 cardmargin centertext">
        <v-card-text class="font-weight-black" v-text="step.description"></v-card-text>
        <v-img :src="step.imagesrc" />
      </v-card>
    </div>
    <br />
    <p class="font-weight-bold">Thanks for reading and making it this far! Be on the lookout for other projects in the future.</p>
  </div>
</template>

<script>
export default {
  name: "W40kBracer",
  data: () => ({
    steps: [
      {
        description: "Template after wrapping it around my arm",
        imagesrc: require("@/assets/w40kbracer/01-templatefromforearm.jpg"),
      },
      {
        description: "The cut out foam after being heat molded into shape and held in place with masking tape, also cut out and added the trim",
        imagesrc: require("@/assets/w40kbracer/02-cutoutheatmolded.jpg"),
      },
      {
        description: "As before just the other side",
        imagesrc: require("@/assets/w40kbracer/03-cutoutheatmolded-otherside.jpg"),
      },
      {
        description: "The pack of precut foam scales I used, got through most of it!",
        imagesrc: require("@/assets/w40kbracer/04-precutfoamscales.jpg"),
      },
      {
        description: "Starting the process of contact cementing the scales on, a very time consuming process",
        imagesrc: require("@/assets/w40kbracer/05-gluingscaleson.jpg"),
      },
      {
        description: "All the scales glued on, contact cement almost used up. Masking table on in prep for spray painting",
        imagesrc: require("@/assets/w40kbracer/06-allscalesgluedon.jpg"),
      },
      {
        description: "Only shot I had of the spray painting with the gold trim, I had already done the green beforehand",
        imagesrc: require("@/assets/w40kbracer/07-paintinggoldtrim.jpg"),
      },
      {
        description: "The finished product! Some blemishes and peeling from the rubber spray, but it looks awesome",
        imagesrc: require("@/assets/w40kbracer/08-finished.jpg"),
      },
      {
        description: "Reverse shot showing the zipper",
        imagesrc: require("@/assets/w40kbracer/09-zippedunderside.jpg"),
      },
    ],
  }),
};
</script>

<style>
.cardmargin {
  margin: 10px 5px 10px 5px;
}
.centertext {
  text-align: center;
}
</style>