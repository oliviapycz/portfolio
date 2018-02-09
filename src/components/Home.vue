<template lang="html">
  <div id="home" class="">
    <div class="col-md-9 row">
      <section class="col-md-6 offset-md-3 row">
        <h1 class="col-md-12">Développeuse Web Junior</h1>
        <h3 class="col-md-12">#Simplon  #Autodidacte  #Perséverante </h3>
      </section>
    </div>
    <div class="col-md-9 row">
      <div class="picture offset-md-5"></div>
    </div>
    <div class="mobile col-xs-10 col-sm-10 offset-xs-1 offset-sm-1">
      <h2>Sorry.......<br>Mon Porte-Folio<br>n'est disponible<br>que sur ordinateur<br>pour l'instant<br>Mais c'est pour bientôt<br>sur mobile!</h2>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

@media screen and (min-width: 1101px) {
  #home {
    background-color: rgba(101, 52, 134, 0.7);
    height: 90vh;
    width: 100vw;
  }
  section {
    border: 3px solid #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px 2px lightgrey;
    background-color:  rgb(143, 196, 78);
    margin-top: 18vh;
    padding: 15px;
    color: white;
  }
  .picture {
    border: 3px solid #fff;
    border-radius: 100px;
    box-shadow: 0 0 5px 2px lightgrey;
    margin-top: 5vh;
    height: 26vh;
    width: 26vh;
    background-image: url(../assets/test.jpg);
    background-size: contain;
  }
  .mobile {
    display: none;
  }
}

@media screen and (max-width: 1100px) {
  #home {
    background-color: black;
    /*opacity: 0.8;*/
    z-index:900;
    min-height: 100vh;
    color: black
  }
  .mobile {
    z-index: 999;
    color: #8fc44e;
    text-align: center;
    position: absolute;
    top: 20vh;
    font-family: 'Saira Semi Condensed', sans-serif;
  }
}

</style>
<!-- violet : #653486
vert: #8fc44e -->
