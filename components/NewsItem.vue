/* eslint-disable vue/no-v-html */
<template>
  <b-row>
    <b-col class="news-item">
      <h5 class="date">{{ date }}</h5>
      <h2>
        {{ post.title.split('-')[0] }} -
        <span class="album-title">{{ post.title.split('-')[1] }}</span>
      </h2>
      <p class="news" v-html="$md.render(post.body)"></p>
      <span v-html="post.embed"></span>
      <br />
      <hr />
    </b-col>
  </b-row>
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
</style>
