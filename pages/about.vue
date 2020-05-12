<template>
  <b-container>
    <div class="about">
      <img
        src="https://i.imgur.com/XouIPox.jpg"
        width="300 px"
        alt="dust logo"
      />
      <p>
        Dust, Etc. is a tiny record label in Portland, ME.
      </p>
      <p>
        Dust, Etc. was founded by Cole Kinsler in 2015.
      </p>
      <p>
        <a href="mailto:dustetc@gmail.com?Subject=Howdy" target="_blank"
          >dustetc@gmail.com</a
        >
      </p>
      <br />
    </div>
  </b-container>
</template>

<script>
export default {
  components: {
    // Nav
  },
  data() {
    return { title: 'Dust, Etc.' }
  }
}
</script>

<style>
.about {
  text-align: center;
  font-size: 17px;
}
</style>
