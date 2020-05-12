<template>
  <div>
    <a href="./summerwinter.html">
      <div class="jumbotron">
        <!-- <div class="container-fluid jumbo-title"></div> -->
      </div>
    </a>
    <div class="container">
      <div>
        <h2 v-if="show" class="subtitle">{{ title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    //
  },
  data() {
    return { title: 'Dust, Etc.', subtitle: 'a site', show: false }
  }
}
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3em;
  padding-bottom: 4em;
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
