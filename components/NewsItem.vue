/* eslint-disable vue/no-v-html */
<template>
  <div class="news-item">
    <b-row>
      <b-col>
        <h5 class="date">{{ date }}</h5>
        <h2>
          {{ post.title.split('-')[0] }} -
          <span class="album-title">{{ post.title.split('-')[1] }}</span>
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
        <hr />
      </b-col>
    </b-row>
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
      date: new Date(this.post.date).toDateString()
    }
  }
}
</script>

<style>
.date {
  font-style: italic;
  font-size: 1.18em;
}
.news-item {
  /* padding-bottom: 1em; */
}
</style>
