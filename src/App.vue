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
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              {{ currentRoom }}
            </p>
          </div>
        </div>
      </div>
    </nav>
    <div v-if="page === 1">
      <div class="container">
        <div class="field">
          <label class="label">Chatroom</label>
          <div class="control">
            <input
              v-model="currentRoom"
              class="input"
              type="text"
              placeholder="Chatroom"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              v-model="name"
              class="input"
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button" @click="setRoom">Enter room</button>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <!-- Message container -->
      <div class="container is-fluid" v-if="messages">
        <div v-for="message in messages" :key="message.id">
          <div class="tile is-ancestor">
            <div
              class="tile is-vertical is-8"
              v-if="message.name === name"
            ></div>
            <div class="tile is-vertical is-4">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article
                    class="tile is-child notification"
                    :class="message.name === name ? 'is-primary' : ''"
                  >
                    {{ message.text }}
                  </article>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="card is-pulled-right">
            <div class="card-content">
              <div class="content">
                {{ message.text }}
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <div class="container" v-else>
        No messages in room yet
      </div>

      <div class="container is-fluid send">
        <div class="field is-grouped">
          <p class="control is-expanded">
            <input
              v-model="message"
              class="input"
              type="text"
              placeholder="Write message..."
            />
          </p>
          <p class="control">
            <a class="button" @click="add">
              Send
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from './firebase/api';

export default {
  data() {
    return {
      message: '',
      messages: null,
      currentRoom: '',
      name: '',
      page: 1,
    };
  },

  methods: {
    setRoom() {
      this.page = 2;
      this.get();
    },

    add() {
      api
        .insertData(this.currentRoom, { text: this.message, name: this.name })
        .then((res) => console.log(res));
    },

    get() {
      api.getMessages(this.currentRoom).on('value', (snapshot) => {
        this.messages = snapshot.val();
      });
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

.card {
  width: 550px;
}
</style>
