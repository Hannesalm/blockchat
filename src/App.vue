<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <img
            src="https://assets.blocketcdn.se/adout/public/assets/images/blocketLogotype.png"
          />
          Blockchat
        </div>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start"></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: true,
      message: 'Blockchat',
    };
  },
};
</script>

<style>
#app {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: #ef3f4e;
}
</style>
