<template>
  <div class="home">
    <h2>RSVP</h2>
    <input type="text" placeholder="Email" /><button>RSVP</button>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  mounted() {
    document.querySelector('button').onclick = () => {
          const email = document.querySelector('input').value;
          console.log(email);
          firebase.auth().sendSignInLinkToEmail(email, {
            url: 'http://ranchesandroses.com:8080/#/details',
            handleCodeInApp: true,
          })
          .then(() => {
            window.localStorage.setItem('emailForSignIn', email);
          })
          .catch((error) => {
            alert(error.message);
          });
    };
  }
}
</script>