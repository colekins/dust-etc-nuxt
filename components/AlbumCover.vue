<template>
  <b-col
    :lg="onDiscographyPage ? 3 : 6"
    :md="onDiscographyPage ? 4 : 6"
    sm="6"
    class="album-cover"
  >
    <n-link :to="'/albums/' + album.title.replace(/ /g, '').toLowerCase()">
      <img :src="album.images.small" width="100%" :alt="album.title" />
    </n-link>
    <div v-if="onDiscographyPage" class="item-title">
      {{ album.artist }} - <span class="italic">{{ album.title }}</span>
    </div>
  </b-col>
</template>

<script>
export default {
  components: {},
  props: {
    // eslint-disable-next-line vue/require-default-prop
    album: Object
  },
  data() {
    return {
      onDiscographyPage: this.$route.name === 'discography'
    }
  }
}
</script>

<style>
.album-cover {
  margin-bottom: 2.1em;
  transition: transform 0.3s ease;
}

/* .album-cover:hover {
  transform: scale(1.05);
} */

.item-title {
  font-size: 16px;
  text-align: center;
  text-transform: capitalize;
}

.italic {
  font-style: italic;
}
</style>
