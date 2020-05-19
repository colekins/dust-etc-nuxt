/* eslint-disable vue/no-v-html */
<template>
  <b-row>
    <b-col class="news-item">
      <h2>
        {{ post.title.split('-')[0] }} -
        <span class="album-title">{{ post.title.split('-')[1] }}</span>
      </h2>
      <p class="news" v-html="$md.render(post.body)"></p>
      <hr />
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    post: Object
  }
}
</script>

<style>
.album-row {
  margin-bottom: 20px;
  margin-left: -15px;
  margin-right: -15px;
}

.album-title {
  font-style: italic;
  font-weight: bold;
}

blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 15.5px;
  border-left: 5px solid #eee;
}
</style>
