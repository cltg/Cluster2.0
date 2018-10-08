<template>
  <div>
    <div class="jumbotron bg-cluster text-white text-center">
      <h2 class="lead display-3">Cluster</h2>
      <p>A social network for women interested in <a href="https://en.wikipedia.org/wiki/Science,_technology,_engineering,_and_mathematics">STEM</a></p>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col text-center">
          <div class="row mt-2">
            <div class="col text-center">
              <button class="btn btn-outline-info btn-md">Ingresar</button>
            </div>
          </div>
          <a href="#" target="#">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row mt-3">
        <div class="col text-center">
          <button @click="loginWithGoogle" class="btn btn-outline-danger btn-lg">Login with Google</button>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col text-center">
          <button class="btn btn-outline-primary btn-lg">Login with Facebook</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import auth from 'firebase/auth';

export default {
  name: 'login',
  methods: {
    loginWithGoogle() {
      // console.log('Oi, it is werkin');
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((res) => {
          console.log(res.user);
        });
    },
  },
};
</script>

<style>
.btn,
.jumbotron {
  border-radius: 0px;
}

.bg-cluster {
  background-color: #96064e;
}
</style>
