<template lang="html">
  <ul class="nav flex-column menu">
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Home', params: {} }">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Presentation', params: {} }">Présentation</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Parcours', params: {} }">Parcours</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Competences', params: {} }">Compétences</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Projets', params: {} }">Projets</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Contact', params: {} }">Contact</router-link>
    </li>
  </ul>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .nav li{
    font-family: 'Saira Semi Condensed', sans-serif;
    font-size: 24px;
    text-align: right;
    list-style-type: none;
  }
  .nav {
    line-height: 10vh;
  }
  .nav li:hover{
    font-size: 28px;
    text-decoration: none;
  }
  .nav-link {
    color: white;
  }
  a {
    color: white !important;
  }
</style>
