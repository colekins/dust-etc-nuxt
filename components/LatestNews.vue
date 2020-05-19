/* eslint-disable vue/no-v-html */
<template>
  <div>
    <div class="section-title">News</div>
    <div class="news-item">
      <h2>
        {{ news.title.split('-')[0] }} -
        <span class="album-title">{{ news.title.split('-')[1] }}</span>
      </h2>

      <p class="news" v-html="$md.render(news.body)"></p>
      <iframe
        style="border: 0; width: 100%; height: 340px;"
        src="https://bandcamp.com/EmbeddedPlayer/album=303252568/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
        seamless
        ><a href="http://dustetc.bandcamp.com/album/summer-winter"
          >Summer Winter by Kerem Atalay</a
        ></iframe
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    news() {
      return this.$store.state.blogPosts[0]
    }
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
