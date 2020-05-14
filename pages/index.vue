<template>
  <div>
    <n-link to="/discography">
      <div class="jumbotron"></div>
    </n-link>
    <div class="container-fluid content-container">
      <b-row>
        <b-col lg>
          <News />
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
import News from '~/components/News.vue'
import data from '~/data/albums.js'

export default {
  components: {
    NewReleases,
    News
  },
  data() {
    return {
      title: 'Dust, Etc.',
      newReleases: data.albums.slice(0, 4)
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

/* .lowertron {
  height: 190px;
  background-image: url('https://i.imgur.com/TAv3NYz.jpg');
  background-position: center;
  background-size: 100%;
  min-width: 100%;
  border-radius: 0;
} */

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
