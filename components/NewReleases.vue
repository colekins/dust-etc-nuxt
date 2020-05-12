<template>
  <div class="new-releases">
    <div class="section-title">Latest Releases</div>
    <b-row class="album-row">
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

export default {
  components: { AlbumCover },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    albums: Array
  }
}
</script>

<style>
.new-releases {
  position: sticky;
  top: 88px;
}
</style>
