<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <h2>Ingresa tu correo electrónico</h2>
      <input type="email" class="input" name="email" v-model="email">
    <h2>Ingresa tu contraseña</h2>
      <input type="password" class="input" name="name" v-model="name">
      <button>Ingresar</button>
    <ul>
      <li>
        <a
          href="#"
          target="_blank"
        >
          ¿Olvidaste tu contraseña?
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      msg: 'Cluster 2.0',
    };
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {

  color: #42b983;

}
button {
  margin-top: 10%;
  width: 40%;
  height: 30px;
  font: 20px solid black;
  border-radius: 10px;
  background-color:  #681113;
}
</style>
