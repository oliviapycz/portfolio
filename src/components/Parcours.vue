<template lang="html">
  <div id="parcours">
    <div class="col-md-10 row" style="margin-top:20px; color: white">
      <div class="col-md-6 offset-md-3 row">
        <h2 class="col-md-12">Parcours</h2>
      </div>
      <ul class=" ul-menu col-md-3row">
        <li id="formation" class="col-md-12 green" @click="showFormations"><i class="fas fa-graduation-cap fa-2x "></i></li>
        <li id="experience" class="col-md-12 " @click="showExperiences"><i class="fas fa-briefcase fa-2x "></i></li>
        <li id="association" class="col-md-12 " @click="showAssociations"><i class="fas fa-globe fa-2x "></i></li>
      </ul>
      <transition name="fade">
        <div class="col-md-10 offset-md-2 row" v-if="formations" style="text-align: left">
        <h4 class="green col-md-12" style="margin-top: 5vh; margin-bottom: 8vh;font-size: 26px;">Formations</h4>
        <div class="col-md-6">
            <h5>2018-2019 ( projection)</h5>
             <p> Préparation du diplôme de niveau II Licence</p>
        </div>
        <div class="col-md-6">
          <h5>2016 ( 1 mois) : Simplon - Hackeuses</h5>
          <p> Initiation et découverte des écosystèmes du numérique</p>
        </div>

         <div class="col-md-6">
             <h5>2017-2018 ( en cours): Simplon</h5>
              <p> Préparation du diplôme de niveau III<br>Certificat Développeur.se Logiciel</p>
         </div>
         <div class="col-md-6">
           <h5>2013-2015 : Université Orsay Paris Sud</h5>
            <p> Licence d'Optique Professionnelle <br>Adaptation en Lentilles de Contact</p>
         </div>
         <div class="col-md-6">
           <h5>2017 ( 7mois) : Simplon</h5>
            <p> Formation au développement d'application web spécialité PHP</p>
          </div>
         <div  class="col-md-6">
          <h5>2009-2011 : ISO Paris XV</h5>
          <p> Brevet de Technicien Supérieur Opticien-Lunetier</p>
        </div>
      </div>
      </transition>
      <transition name="fade">
        <div class="col-md-10 offset-md-2 row" v-if="experiences" style="text-align: left">
        <h4 class="green col-md-12" style="margin-top: 5vh; margin-bottom: 8vh;font-size: 26px;">Expériences</h4>
        <div class="col-md-6">
            <h5>2018-2019 : Chez vous?</h5>
             <p> Licence Professionnelle en alternance</p>
             <h5>2017-2018 : Carrefour Massy</h5>
              <p>Service Mobile, Portails et Flux<br>POC en VueJS<br>Projet en GraphQL et React-Native</p>
              <h5>2017 ( 1 mois) : Stage - Soleil Blaise</h5>
              <p> Réalisation d'un site Wordpress pour présenter l'association<br>Réalistation de vidéos tutoriels à destination des employés pour gérer le site.</p>
        </div>
        <div class="col-md-6">
          <h5>2015-2016 : Antiquaire de l'Optique</h5>
           <p>- Conseils client, apport de solutions en rapport avec les prescriptions et le besoin du client<br>- Gestion du service après vente<br>- Organisation et tenue du magasin</p>
          <h5>2011-2013 : Afflelou Paris20</h5>
          <p>- Réalisation tout type de montage<br>- Vente d’équipements optiques et solaires, suivi client<br>- Gestion de Tiers-Payant<br>- Renouvellement des Stocks</p>
        </div>
      </div>
      </transition>
      <transition name="fade">
        <div class="col-md-10 offset-md-2 row" v-if="associations" style="text-align: left">
        <h4 class="green col-md-12" style="margin-top: 5vh; margin-bottom: 8vh;font-size: 26px;">Associations</h4>
       <div class="col-md-6">
           <h5>2007 ( 2mois) : Saathi</h5>
            <p> Organisation non gouvernementale au Népal venant en aide aux enfants orphelins et / ou sans domicile (hébergement, éducation, scolarisation, couverture sanitaire…)<br><br>- Participation à l’encadrement des enfants et apport d’un soutien éducatif<br>- Création de programmes d’animation et de divertissement</p>
       </div>
       <div class="col-md-6">
         <h5>2005-2006 :  Macadam Café</h5>
          <p> Organisation non gouvernementale à Paris apportant un soutien aux personnes sans domicile fixe<br><br>-Distribution de nourritures et boissons chaudes<br>-Sensibilisation et Information sur les possibilités de prise en charge</p>
        </div>
      </div>
      </transition>

    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      formations: true,
      experiences: false,
      associations: false
    }
  },
  methods: {
    showFormations () {
      this.formations = true
      this.experiences = false
      this.associations = false
      document.getElementById('formation').classList.add('green')
      document.getElementById('experience').classList.remove('green')
      document.getElementById('association').classList.remove('green')
    },
    showExperiences () {
      this.experiences = true
      this.formations = false
      this.associations = false
      document.getElementById('experience').classList.add('green')
      document.getElementById('formation').classList.remove('green')
      document.getElementById('association').classList.remove('green')
    },
    showAssociations () {
      this.associations = true
      this.experiences = false
      this.formations = false
      document.getElementById('association').classList.add('green')
      document.getElementById('experience').classList.remove('green')
      document.getElementById('formation').classList.remove('green')
    }
  }
}
</script>

<style lang="css">
#parcours {
  background-color: rgba(143, 196, 78, 0.7);
  height: 90vh;
  width: 100vw;
}
h5 {
  font-size: 18px;
  text-decoration: underline #8fc44e;
  font-family: 'Saira Semi Condensed', sans-serif;
}
p {
  font-size: 16px;
  font-family: 'Saira Semi Condensed', sans-serif;
  color: black;
}
li {
  font-size: 20px;
  list-style-type: none;
}
.ul-menu {
  position: absolute;
  left: 2vh;
  top: 20vh;
}
.ul-menu li {
  margin-top: 5vh;
  transition: all 400ms ease-out;
  transform: scale(1);
}
.green {
  color: green !important;
}
.ul-menu li:hover {
  cursor: pointer;
  transition: all 400ms ease-in;
  transform: scale(1.2);
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.4s;
  transition-delay: 0.2s;
}

.fade-leave-active {
  opacity: 0;
}
</style>
