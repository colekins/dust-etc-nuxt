<template>
  <div>
    <div class="section-title">Latest Releases</div>
    <b-row class="album-row">
      <AlbumCover
        v-for="album in albums.slice(0, 2)"
        :key="album.title"
        :album="album"
      ></AlbumCover>
    </b-row>
    <b-row class="album-row">
      <AlbumCover
        v-for="album in albums.slice(2, 4)"
        :key="album.title"
        :album="album"
      ></AlbumCover>
    </b-row>
  </div>
</template>

<script>
import AlbumCover from '~/components/AlbumCover'
export default {
  components: { AlbumCover },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    albums: Array
  }
}
</script>

<style>
.album-row {
  margin-bottom: 20px;
  margin-left: -15px;
  margin-right: -15px;
}
</style>
