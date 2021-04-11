<template>
  <header>
    <h1>Ranches and Roses</h1>
  </header>
  <router-view />
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

  body {
    color: gold;
    font-family: 'Indie Flower';
    text-align: center;
  }

  * {
    background-color: navy;
    color: gold;
    font-family: 'Indie Flower';
  }

  input, a, button, h2, h3 {
    font-size: 40px;
  }

  input, button {
    border: 2px solid gold;
    padding: 10px;
  }

  input {
    width: 80%;
  }

  h1 {
    font-size: 60px;
  }
</style>

<script>
import firebase from 'firebase/app';

export default {
  mounted() {
    firebase.initializeApp({
      apiKey: "AIzaSyBEvZMrvSWfyO8E5ZCXZcBKMwnLLSoqtXg",
      authDomain: "ranches-and-roses.firebaseapp.com",
      projectId: "ranches-and-roses",
      storageBucket: "ranches-and-roses.appspot.com",
      messagingSenderId: "966179674206",
      appId: "1:966179674206:web:7c84c188cedeb72a907ccf"
    });
  }
}
</script>