<template>
  <div>
    <a href="/">
      <div class="jumbotron"></div>
    </a>
    <div class="container-fluid content-container" @click="show = !show">
      <b-row>
        <b-col>
          <div>
            <News />
          </div>
        </b-col>
        <b-col>
          <NewReleases />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import NewReleases from '~/components/NewReleases.vue'
import News from '~/components/News.vue'

export default {
  components: {
    NewReleases,
    News
  },
  data() {
    return { title: 'Dust, Etc.', subtitle: 'a site', show: true }
  }
}
</script>

<style>
.content-container {
  padding: 0 4em;
  padding-bottom: 4em;
}

.section-title {
  padding-bottom: 10px;
  font-style: italic;
}

.jumbotron {
  height: 548px;
  background-image: url('https://i.imgur.com/kv0EGF2.jpg');
  background-position: center;
  background-size: cover;
  min-width: 100%;
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
