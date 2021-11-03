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
          <a href="mailto:dustetc@icloud.com?Subject=Hello" target="_blank"
            >dustetc@icloud.com</a
          >
        </p>
        <p></p>
        <br />
      </b-col>
      <b-col class="photo-col" lg="6">
        <img src="~/assets/georgia.jpg" width="100%" />
        Georgia, A&R.
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return { title: 'Dust, Etc.' }
  }
}
</script>

<style>
.about {
  margin-top: 3em;
  margin-bottom: 4em;
}
.about-text {
  margin-top: 3em;
  text-align: center;
  font-size: 17px;
}

.photo-col {
  /* text-align: center; */
  font-size: 0.93em;
}

@media only screen and (max-width: 992px) {
  .about {
    margin-top: 0em;
    margin-bottom: 4em;
  }
}
</style>
