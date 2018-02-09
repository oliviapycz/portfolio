<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <app-navbar id="navbar"></app-navbar>
      <transition :name="transitionName" mode="out-in">
        <router-view></router-view>
      </transition>
      <app-menu id="menu" class="col-md-2"></app-menu>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu'
import NavBar from './components/NavBar'
export default {
  name: 'App',
  components: {
    appMenu: Menu,
    appNavbar: NavBar
  },
  data () {
    return {
      transitionName: 'slide-right'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
    }
  }
}
</script>

<style>
@media screen and (max-width: 1100px) {
  #menu {
    display: none;
  }
}
@media screen and (min-width: 767px) {
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-image: url(./assets/polar.jpg);
    background-position: center;
    background-size: contain;
    z-index: -1;
    /*margin-top: 60px;*/
  }
  #navbar {
    z-index: 500;
    position: relative;
    width: 100vw;
  }
  #menu {
    z-index: 500;
    position: absolute;
    right: 1vw;
    bottom: 7vh;
  }

  h1, h2, h3, h4, li{
    font-family: 'Saira Semi Condensed', sans-serif;
  }

  @keyframes slideInRight {
    from {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slideInLeft {
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    to {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }
  }

  .slide-right-enter-active {
    animation: slideInRight 0.7s ease-out forwards;
  }

  .slide-right-leave-active {
    animation: slideInLeft 0.7s ease-out forwards;
  }
}

</style>
