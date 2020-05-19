<template>
  <div class="container-fluid content-container discography">
    <b-row>
      <AlbumCover
        v-for="album in albums"
        :key="album.title"
        :album="album"
      ></AlbumCover>
    </b-row>
  </div>
</template>

<script>
import AlbumCover from '~/components/AlbumCover'
import data from '~/data/albums.js'

export default {
  components: {
    AlbumCover
  },
  data() {
    return { albums: data.albums }
  }
}
</script>

<style>
.discography {
  text-align: center;
  margin-top: 3.5em;
}
</style>
