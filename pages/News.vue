<template>
  <b-container class="container news-container">
    <NewsItem
      v-for="post in posts"
      :key="post.title"
      class="news-item-row"
      :post="post"
    >
    </NewsItem>
  </b-container>
</template>

<script>
import NewsItem from '~/components/NewsItem.vue'

export default {
  components: {
    NewsItem
  },
  computed: {
    posts() {
      return this.$store.state.blogPosts
    }
  }
}
</script>

<style>
.news-item-row {
  margin-bottom: 4em;
}

.news-container {
  margin-top: 3em;
  margin-bottom: 4em;
}
</style>
