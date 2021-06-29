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
    </nav>
    <!-- Message container -->
    <div class="container is-fluid"></div>

    <div class="container is-fluid send">
      <div class="field is-grouped">
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Write message..." />
        </p>
        <p class="control">
          <a class="button">
            Send
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import api from './firebase/api';

export default {
  data() {
    return {
      message: true,
      message: 'Blockchat',
      currentRoom: '',
    };
  },

  methods: {
    add() {
      api.insertData(this.currentRoom);
    },
  },
};
</script>

<style>
#app {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: #ef3f4e;
}

.button {
  color: white;
  background-color: #ef3f4e;
}

.send {
  position: absolute;
  bottom: 10px;
}

.block {
  width: 350px;
}
</style>
