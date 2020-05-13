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

export default {
  asyncData({ params, payload }) {
    if (payload) return { album: payload }
    else console.log(params, payload)
    return {
      album: data.albums[0]
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
