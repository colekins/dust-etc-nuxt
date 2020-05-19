<template>
  <div>
    <Nav />
    <transition name="fade">
      <nuxt />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer'

export default {
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin-top: 79px;
}

body {
  font-size: 16px;
  font-family: 'Old Standard TT', serif;
  line-height: 1.9em;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

@media only screen and (max-width: 576px) {
  html {
    margin-top: 57px;
  }
}
</style>
