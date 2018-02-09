<template lang="html">
  <div id="presentation" class="">
    <div class="col-md-9 row" style="margin-top:20px; color: white">
      <div class="col-md-6 offset-md-3 row">
        <h2 class="col-md-12">Présentation</h2>
      </div>
      <transition name="fade10">
        <div class="col-md-10 offset-md-1 about row" v-if="show">
          <h3 class="col-md-12" style="text-decoration: underline #8fc44e; font-weight: bold">A propos</h3>
          <h4 class="col-md-8">Après 7ans dans le secteur de l'optique-lunetterie je me reconvertis dans les métiers du numérique.
          <br>Formée à l'école Simplon je suis actuellement en contrat de professionnalisation au sein du groupe Carrefour dans le service Mobile, Portails et Flux..</h4>
        </div>
      </transition>
      <transition name="fade12">
        <div class="col-md-10 offset-md-1 projet-pro row" v-if="show">
          <h3 class="col-md-12" style="text-decoration: underline #8fc44e; font-weight: bold">Projet Professionnel</h3>
          <h4 class="col-md-8 offset-md-4">
          Je recherche une entreprise pour octobre 2018 afin de continuer ma monter
        en compétences en parallèle d'une Licence professionnelle, et ce, pour un contrat d'un an.</h4>
        </div>
      </transition>
      <transition name="fade14">
        <div class="col-md-10 offset-md-1 row hobbies" v-if="show">
          <h3 class="col-md-12" style="text-decoration: underline #8fc44e; font-weight: bold">Loisirs</h3>
          <h4 class="col-md-8">La cuisine et les bons plats (surtout le lapin)<br>
          Les jeux de société comme 7wonders (quand je gagne)<br>
          Les voyages au bout du monde (comme la Belgique)<br>
          Littérature Moderne comme les Rougon-Macquart<br>
          Passion irrationnelle pour les Ours Polaires</h4>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  mounted () {
    this.show = true
  }
}
</script>

<style lang="css">
#presentation {
  background-color: rgba(165, 42, 42, 0.7);
  height: 90vh;
  width: 100vw;
}
h3 {
  font-size: 22px;
}
h4 {
  font-size: 20px;
}
.about {
  text-align: left;
}
.projet-pro {
  text-align: right;
}
.hobbies {
  text-align: left;
}

.fade10-enter, .fade12-enter, .fade14-enter {
  opacity: 0;
}

.fade10-enter-active {
  transition: opacity 1s;
  transition-delay: 0.8s;
}

.fade12-enter-active {
  transition: opacity 1s;
  transition-delay: 1.3s;
}

.fade14-enter-active {
  transition: opacity 1s;
  transition-delay: 1.8s;
}

.fade10-leave-active, .fade12-leave-active, .fade14-leave-active {
  opacity: 0;
}
</style>
