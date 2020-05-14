<template>
  <div class="container-fluid content-container album-page">
    <h2 class="album-artist">
      {{ album.artist }} -
      <span class="album-title">{{ album.title }}</span>
    </h2>
    <b-row>
      <b-col md="6">
        <a :href="album.links.bandcamp" target="_blank">
          <img
            class="merch-image"
            :src="album.images.vinyl || album.images.cd || album.images.tape"
            width="100%"
            :alt="album.title"
          />
        </a>
      </b-col>
      <b-col md="6">
        <blockquote class="quote-card">
          <p>
            {{ album.review.body }}
          </p>
          <cite>
            - {{ album.review.author }},
            <a :href="album.review.link[1]" target="_blank">
              {{ album.review.link[0] }}
            </a>
          </cite>
        </blockquote>
        <span v-html="album.embed"></span>
        <div class="release-date">Released {{ album.releaseDate }}.</div>
        <span class="spotify" v-html="album.links.spotify"></span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import data from '~/data/albums.js'
const albums = data.albums

export default {
  asyncData({ params, payload }) {
    return {
      album: albums.filter(
        (album) => album.title.replace(/ /g, '').toLowerCase() === params.album
      )[0]
    }
  },
  data() {
    return {}
  }
}
</script>

<style>
.album-page {
  margin-top: 2em;
}

.album-artist {
  text-transform: capitalize;
  margin-bottom: 0.4em;
}

.merch-image {
  position: sticky;
  top: 88px;
}

.release-date {
  font-size: 15px;
}

.spotify {
  float: right;
}
</style>
