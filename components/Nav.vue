<template>
  <div>
    <b-navbar class="navbar" toggleable="sm" fixed="top">
      <b-navbar-brand class="mr-auto" to="/">Dust, Etc.</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="nav-link" to="/about">About</b-nav-item>
          <b-nav-item class="nav-link" to="/discography"
            >Discography</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
.navbar {
  z-index: 2000;
  background: white;
}

.nav-collapse {
  background: white;
}

.nav-link {
  font-size: 17px;
  color: rgb(0, 0, 0, 1) !important;
}
.navbar-brand {
  font-size: 30px;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
