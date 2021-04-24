<template>
  <div style="text-align: left; max-width: 900px; margin: 10px">
    <h1>W40k Pauldron</h1>

    <div style="text-align: center">
    <img src="@/assets/w40kpauldron/salamanders-pic.jpg" style="max-width: 200px" />
    </div>

    <h3>What and why</h3>
    <p>
      I love Warhammer and I enjoy making things so I've been keen for a while
      to create something Warhammer-themed using foam. In this case I've created
      a Pauldron armour piece for a Space Marine, specifically from the
      Salamanders chapter which is one of my favorites!
    </p>

    <h3>How</h3>
    <p>
      When initially looking into this I struggled to find any foam templates
      for a set of Space Marine armour, but was able to use templates used for paper craft instead. This slightly impacted the final build with some minor gaps but that's just part of the learning process. <BasicLink text="Find the templates here" url="http://obscuruscrusade.com/forum/index.php?topic=1544.0" />
    </p>

    <h3>Learnings</h3>
    <p>
        <ul>
            <li>When cutting out the foam I did it straight down, but considering the angles and width of the foam I should have cut them at a bit of an angle so they would join together with a smoother finish.</li>
            <li>The BluTac worked well to hold the stencil in place for the dragon head, but it wasn't perfect and it caused the finer points (for example the teeth) to not be painted as nicely as I would like, so next time if using BluTac again make sure it's a bit flatter and better molded to the edges of the stencil.</li>
            <li>When spray painting I tried to be careful and used masking tape, which mostly worked well but it wasn't stuck perfectly everywhere so caused some colors to get through the gaps. So will just try to stick things properly next time.</li>
        </ul>
    </p>

    <h3>Checkout the build process step-by-step</h3>

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
import BasicLink from "@/components/BasicLink.vue";
export default {
  name: "W40kPauldron",
  components: {
    BasicLink,
  },
  data: () => ({
    steps: [
      {
        description:
          "Printed out Pepakura paper template, scaled from full size to a medium size (for display purposes)",
        imagesrc: require("@/assets/w40kpauldron/01-printedouttemplate.jpg"),
      },
      {
        description:
          "Template joined and cut out, placed onto foam and edges traced",
        imagesrc: require("@/assets/w40kpauldron/02-preparedtemplateonfoam.jpg"),
      },
      {
        description:
          "Another view after the edges of the template have been traced",
        imagesrc: require("@/assets/w40kpauldron/03-templatestenciledoutonfoam.jpg"),
      },
      {
        description: "After cutting the foam from the template",
        imagesrc: require("@/assets/w40kpauldron/04-foamcutout.jpg"),
      },
      {
        description:
          "Heat molded the foam a bit in preparation for joining with contact cement",
        imagesrc: require("@/assets/w40kpauldron/05-foammoldedslightlyinprep.jpg"),
      },
      {
        description: "After joining everything with contact cement",
        imagesrc: require("@/assets/w40kpauldron/06-resultaftercontactcement.jpg"),
      },
      {
        description: "As above just another view",
        imagesrc: require("@/assets/w40kpauldron/07-resultaftercontactcementagain.jpg"),
      },
      {
        description:
          "Cutting out the armour trim template, using parts of the original template as a guide for the angle. They are intentionally a bit longer, I can trim the excess foam later.",
        imagesrc: require("@/assets/w40kpauldron/08-templatefortrim.jpg"),
      },
      {
        description:
          "Cutting out the trim. Not too visible but could have cut this a bit straighter (i.e. with the knife, because it was slightly angled). Afterwards fit onto the main piece and cut off the excess. I heat gunned this afterwards, however this caused the pieces to shrink slightly. SO in hindsight, should have left them as extra long, heat gunned, THEN trimmed. In this case the gaps were filled with the cut offs, after adding flexbound and spray painting this won't be too visible.",
        imagesrc: require("@/assets/w40kpauldron/09-cuttingouttrim.jpg"),
      },
      {
        description:
          "Edges contact cemented to the pauldron using 5mm foam cut out from above.",
        imagesrc: require("@/assets/w40kpauldron/10-edgeadded.jpg"),
      },
      {
        description:
          "Edges contact cemented to the pauldron using 5mm foam cut out from above.",
        imagesrc: require("@/assets/w40kpauldron/11-edgeadded.jpg"),
      },
      {
        description:
          "Based on how I cut from the original template the angle caused some gaps to occur in the seams, so filled them in with Kwik Seal.",
        imagesrc: require("@/assets/w40kpauldron/12-quicksealforgaps.jpg"),
      },
      {
        description:
          "Now everything is together, applied 3 layers of Flexbond, with 1 coat on the back",
        imagesrc: require("@/assets/w40kpauldron/13-flexbondapplied.jpg"),
      },
      {
        description: "Starting the painting by doing the edges in green",
        imagesrc: require("@/assets/w40kpauldron/14-edgespaintedgreen.jpg"),
      },
      {
        description:
          "After masking the edges, painting the centre white in prep for adding the dragon head stencil",
        imagesrc: require("@/assets/w40kpauldron/15-centrepaintedwhite.jpg"),
      },
      {
        description:
          "After removing the masking tape. Didn't fully seal it so some white paint get onto the inner part of the edge, but will clean this up after the black paint is applied.",
        imagesrc: require("@/assets/w40kpauldron/16-afterremovingmaskingtape.jpg"),
      },
      {
        description:
          "In an attempt to still spray paint everything, cut out a foam stencil that i can heat mold into the required curve of the armour, because something like paper isn't mailable enough and would leave creases.",
        imagesrc: require("@/assets/w40kpauldron/17-headstencilfoam.jpg"),
      },
      {
        description:
          "Other side of the foam cutout with blutac, so it can stay still while painting and try to seal the stencil and prevent paint from getting in",
        imagesrc: require("@/assets/w40kpauldron/18-blutackstencil.jpg"),
      },
      {
        description:
          "After adding the cutout with blutac and covering the green edges with masking tape, ready everything else to be painted black.",
        imagesrc: require("@/assets/w40kpauldron/19-prepedforpainting.jpg"),
      },
      {
        description:
          "Everything is black after that first coat, made sure to get it from every angle",
        imagesrc: require("@/assets/w40kpauldron/20-afterfirstcoat.jpg"),
      },
      {
        description:
          "After peeling everything off this is the result! Though largely happy with it, it's clear the blutac wasn't applied properly everywhere, so some black paint made it's way inside, also more noticeable is the teeth which were too small/not held down well enough to get a detailed layer.",
        imagesrc: require("@/assets/w40kpauldron/21-itsalmostdone-front.jpg"),
      },
      {
        description: "Right-side shot",
        imagesrc: require("@/assets/w40kpauldron/22-itsalmostdown-rightside.jpg"),
      },
      {
        description: "Left-side shot",
        imagesrc: require("@/assets/w40kpauldron/23-itsalmostdown-leftside.jpg"),
      },
      {
        description:
          "Actual final result after getting some white acrylic paint and filling in the mistakes especially around the teeth",
        imagesrc: require("@/assets/w40kpauldron/24-afterfixingthings.jpg"),
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