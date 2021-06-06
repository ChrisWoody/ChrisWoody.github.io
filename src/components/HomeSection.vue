<template>
    <div>
        <h2>{{ title }}</h2>
        <v-container style="max-width: 1000px">
            <v-row no-gutters class="justify-center">
                <v-col v-for="item in items" :key="item.title" cols="1" class="widecard">
                    <v-card class="pa-2 cardmargin" max-width="300">                    
                        <v-img :src="item.imagesrc" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)">
                            <v-card-title v-text="item.title"></v-card-title>
                        </v-img>
                        <v-card-text v-text="item.description"></v-card-text>
                        <v-card-actions>
                            <template v-if="item.playurl != null">
                                <v-btn color="primary" elevation="2" :href="item.playurl" target="_blank" rel="noopener noreferrer">
                                    <v-icon left>
                                        mdi-controller-classic
                                    </v-icon>
                                    Play
                                </v-btn>
                            </template>
                            <template v-if="item.readmoreurl != null">
                                <v-btn color="secondary" elevation="2" :href="item.readmoreurl">
                                    <v-icon left>
                                        mdi-book-open-blank-variant
                                    </v-icon>
                                    Read more
                                </v-btn>
                            </template>
                            <template v-if="item.githuburl != null">
                                <v-btn color="secondary" elevation="2" :href="item.githuburl" target="_blank" rel="noopener noreferrer">
                                    <v-icon left>
                                        mdi-github
                                    </v-icon>
                                    Code
                                </v-btn>
                            </template>
                            <template v-if="item.slidesurl != null">
                                <v-btn color="secondary" elevation="2" :href="item.slidesurl" target="_blank" rel="noopener noreferrer">
                                    <v-icon left>
                                        mdi-presentation
                                    </v-icon>
                                    View slides
                                </v-btn>
                            </template>
                            <template v-if="item.youtubeurl != null">
                                <v-btn color="secondary" elevation="2" :href="item.youtubeurl" target="_blank" rel="noopener noreferrer">
                                    <v-icon left>
                                        mdi-youtube
                                    </v-icon>
                                    Checkout the video
                                </v-btn>
                            </template>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default ({
    name: 'HomeSection',
    props: {
      title: String,
      items: Array
  }
})
</script>

<style>
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
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>