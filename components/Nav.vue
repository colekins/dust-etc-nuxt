<template>
  <div>
    <b-navbar class="navbar" toggleable="sm" fixed="top">
      <b-navbar-brand>
        <n-link class="nav-link-brand" to="/">Dust, Etc.</n-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <n-link class="nav-link" to="/news">News</n-link>
          </b-nav-item>
          <b-nav-item>
            <n-link class="nav-link" to="/about">About</n-link>
          </b-nav-item>
          <b-nav-item>
            <n-link class="nav-link" to="/discography">Discography</n-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
.navbar {
  z-index: 2000;
  background: rgba(255, 255, 255);
  padding-left: 4em;
  padding-right: 4em;
  border-bottom: 0.5px solid rgba(199, 199, 199, 0.8);
  /* min-height: 78.5px; */
}

.nav-link {
  font-size: 19px;
  color: rgb(0, 0, 0, 1) !important;
}
.nav-link-brand {
  font-size: 29px;
  color: rgb(0, 0, 0, 1) !important;
  /* padding: 8px; */
}

.nav-link-brand:hover {
  text-decoration: none;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media only screen and (min-width: 1450px) {
  .navbar {
    padding: 0.5rem 12rem;
  }
}

@media only screen and (max-width: 700px) {
  .navbar {
    padding: 0.5rem 1rem;
  }
}

@media only screen and (max-width: 500px) {
  .navbar {
    padding: none;
  }
}
</style>
