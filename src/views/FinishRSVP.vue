<template>
  <div class="about">
    <h2 v-if="id">RSVP: {{id}}</h2>
    <h2 v-else>RSVP</h2>
  </div>
</template>

<script>
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export default {
  data() {
    return {
      id: null
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.id = user.email || user.phoneNumber;
    });
  }
}
</script>