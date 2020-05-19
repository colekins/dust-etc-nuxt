<template>
  <div>
    <div class="section-title">News</div>
    <div class="news-item">
      <!-- <h2>Kerem Atalay - <span class="album-title">Summer Winter</span></h2> -->
      <h2>{{ news.title }}</h2>

      <p class="news">
        {{ news.body }}
      </p>

      <blockquote class="quote-card">
        <p>
          "Summer Winter stems from the southern blues of Fahey’s earlier work.
          Split into two seasonal sides—“Summer” and “Winter,” four parts
          each—Atalay asks listeners to lean in closely to spot the subtle
          differences in how his guitar, all acoustic with no effects,
          translates hot and cool. The familiar ways to differentiate the
          seasons are present. “Summer” is often faster, louder, and has a
          warmer tone, while “Winter” is cooler in tone, quiet, and slower. The
          trap with these traditional fingerpicked methods is that one could
          make “Winter” less complex and less compelling. Atalay avoids this
          with a clever choice: He tweaks the weight of the notes."
        </p>
        <cite>
          - Justin Weber,
          <a
            href="https://www.washingtoncitypaper.com/arts/music/blog/21010437/kerem-atalays-summer-winter-reviewed"
            target="_blank"
            >Washington City Paper</a
          >
        </cite>
      </blockquote>
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
