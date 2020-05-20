<template>
  <div class="container-fluid content-container album-page">
    <h2 class="album-artist">
      {{ album.artist }} -
      <span class="album-title">{{ album.title }}</span>
    </h2>
    <b-row>
      <b-col md="6">
        <a
          :href="album.links.bandcamp"
          rel="noopener noreferrer"
          target="_blank"
        >
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
        <div class="buttons">
          <a
            class="buy-link"
            :href="album.links.bandcamp"
            rel="noopener noreferrer"
            target="_blank"
            >Buy
          </a>
          <span class="spotify" v-html="album.links.spotify"></span>
        </div>
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

.buy-link {
  background: #2796e0;
  font-family: Arial;
  font-weight: bold;
  color: #ffffff;
  font-size: 15px;
  padding: 0 19px;
  text-decoration: none;
  border-radius: 4px;
  float: right;
  transition: all 0.25s ease;
  margin-left: 5px;
}

.buttons a:link,
.buttons a:active,
.buttons a:visited {
  color: white;
  text-decoration: none;
}

.buy-link:hover {
  color: white;
  background: #4db4f8;
}

.spotify:hover,
.buy-link:hover {
  transform: scale(1.03);
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
  margin-top: 0.9px;
  transition: all 0.25s ease;
}
</style>
