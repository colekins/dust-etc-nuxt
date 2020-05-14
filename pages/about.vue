<template>
  <b-container class="about">
    <b-row>
      <b-col lg="6" class="about-text">
        <img
          src="https://i.imgur.com/XouIPox.jpg"
          width="300 px"
          alt="dust logo"
        />
        <p>
          Dust, Etc. is a tiny record label in Portland, ME.<br />
          Dust, Etc. was founded by Cole Kinsler in 2015. <br />
          <a href="mailto:dustetc@gmail.com?Subject=Hi" target="_blank"
            >dustetc@gmail.com</a
          >
        </p>
        <p></p>
        <br />
      </b-col>
      <b-col lg="6">
        <img src="~/assets/cole.jpg" width="100%" />
      </b-col>
    </b-row>
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
  margin-top: 2em;
  margin-bottom: 4em;
}
.about-text {
  margin-top: 3em;
  text-align: center;
  font-size: 17px;
}
</style>
