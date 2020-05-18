<template>
  <div>
    <n-link to="/discography">
      <div class="jumbotron"></div>
    </n-link>
    <div class="container-fluid content-container">
      <b-row>
        <b-col lg>
          <LatestNews />
        </b-col>
        <b-col lg>
          <NewReleases :albums="newReleases" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import NewReleases from '~/components/NewReleases.vue'
import LatestNews from '~/components/LatestNews.vue'
import data from '~/data/albums.js'

export default {
  components: {
    NewReleases,
    LatestNews
  },
  data() {
    return {
      title: 'Dust, Etc.',
      newReleases: data.albums.slice(0, 4)
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>

<style>
.content-container {
  padding: 0 4.3em;
  padding-bottom: 4em;
  /* position: relative;
  top: 470px;
  background: white;
  padding-top: 1em; */
}

.section-title {
  padding-bottom: 10px;
  font-style: italic;
}

.jumbotron {
  height: 470px;
  background-image: url('../assets/dust-banner.jpg');
  background-position: center;
  background-size: cover;
  min-width: 100%;
  border-radius: 0;
  /* position: fixed; */
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
