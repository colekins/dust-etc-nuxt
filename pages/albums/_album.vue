<template>
  <b-col
    :lg="onDiscographyPage ? 3 : 6"
    :md="onDiscographyPage ? 4 : 6"
    sm="6"
    class="album-cover"
  >
    <n-link :to="'albums/' + album.title.replace(/ /g, '').toLowerCase()">
      <img :src="album.images.small" width="100%" :alt="album.title" />
    </n-link>
    <div v-if="onDiscographyPage" class="item-title">
      {{ album.artist }} - <span class="italic">{{ album.title }}</span>
    </div>
  </b-col>
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
    return {
      onDiscographyPage: this.$route.name === 'discography'
    }
  }
}
</script>

<style></style>
