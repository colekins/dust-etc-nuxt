/* eslint-disable vue/no-v-html */
<template>
  <div class="news-item">
    <b-row class="info-row">
      <b-col>
        <h5 class="date">{{ date }}</h5>
        <h2>
          {{ headline }}
          <span v-if="albumTitle">
            -
            <span class="album-title">{{ albumTitle }}</span>
          </span>
        </h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6">
        <p class="news" v-html="$md.render(post.body)"></p>
      </b-col>
      <b-col>
        <span v-html="post.embed"></span>
        <br />
        <br />
      </b-col>
    </b-row>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    post: Object
  },
  data() {
    return {
      date: new Date(this.post.date).toDateString(),
      headline: this.post.title.split('-')[0],
      albumTitle: this.post.title.split('-')[1]
    }
  }
}
</script>

<style>
.info-row {
  margin-bottom: 1em;
}
.date {
  font-style: italic;
  font-size: 1.18em;
  margin-bottom: 0.7em;
}
</style>
