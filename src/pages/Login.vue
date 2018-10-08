<template>
  <div>
    <div class="jumbotron bg-cluster text-white text-center">
      <h2 class="lead display-3">Cluster</h2>
      <p>A social Network for STEM women</p>
    </div>
    <div class="container-fluid">
      <div class="row mt-5">
        <div class="col text-center">
          <button class="btn btn-outline-danger btn-lg">Login with Google</button>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col text-center">
          <button class="btn btn-outline-primary btn-lg">Login with Facebook</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login'
  }
</script>

<style>
  .btn, .jumbotron {
    border-radius: 0px;
  }

  .bg-cluster {
    background-color: #96064e;
  }
</style>
