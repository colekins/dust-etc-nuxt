<template>
  <b-col>
    <n-link :to="album.title.replace(/ /g, '')">
      <img
        :src="album.images.small"
        class="album-cover"
        width="100%"
        :alt="album.title"
      />
    </n-link>
  </b-col>
</template>

<script>
export default {
  components: {},
  props: {
    // eslint-disable-next-line vue/require-default-prop
    album: Object
  }
}
</script>

<style></style>
