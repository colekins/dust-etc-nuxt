<template>
  <div>
    <div class="section-title">Latest Releases</div>
    <b-row class="album-row">
      <b-col>
        <a href="">
          <img
            :src="image"
            class="album-cover"
            width="100%"
            alt="Togetherness"
          />
        </a>
      </b-col>
      <b-col>
        <a href="">
          <img
            src="https://f4.bcbits.com/img/a2849978779_2.jpg"
            class="album-cover"
            width="100%"
            alt="Summer Winter"
          />
        </a>
      </b-col>
    </b-row>
    <b-row class="album-row">
      <b-col>
        <a href="">
          <img
            src="https://f4.bcbits.com/img/a1189501631_2.jpg"
            class="album-cover"
            width="100%"
            alt="Grinch"
          />
        </a>
      </b-col>
      <b-col>
        <a href="">
          <img
            src="https://f4.bcbits.com/img/a3747887966_2.jpg"
            class="album-cover"
            width="100%"
            alt="Spring"
          />
        </a>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    // eslint-disable-next-line vue/require-default-prop
    image: String
  },
  data() {
    return { title: 'Dust, Etc.', subtitle: 'a site', show: true }
  }
}
</script>

<style>
.album-row {
  margin-bottom: 20px;
  margin-left: -15px;
  margin-right: -15px;
}
</style>
