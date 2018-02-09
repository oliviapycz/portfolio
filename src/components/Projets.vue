<template lang="html">
  <div id="projets">
    <div class="col-md-9 row" style="margin-top:20px">
      <div class="col-md-6 offset-md-3 row">
        <h2 class="col-md-12" style="color: white">Projets</h2>
      </div>
      <div id="test" class="col-md-12 row">
        <div  v-for="project in projects" :key="project.title"
        class="col-md-3 offset-md-1 thumbnail projets" :class="[project.img]"
        @click="(() =>{triggerModal(project.title)})">
          <h6>{{ project.title }}</h6>
        </div>
      </div>
    </div>
    <transition name="fade">
    <div class="row" v-if="openedModal">
      <div class="col-md-8 modale" v-for="project in projectSelected" :key="project.title">
        <div class="">
          <div class="row col-md-12" style="margin: inherit !important; padding: inherit !important">
              <div class="col-md-4 align-self-center"
              :class="[project.img]"
              style="height: 67vh;background-repeat: no-repeat;
              background-size: cover">
              </div>
              <div class="col-md-7 row" style="margin-left: 10px">
                <a :href="[project.link]" class="col-md-2" style="margin-top: 3vh; color: brown !important">
                  <i class="fas fa-link fa-2x pulse" ></i>
                </a>

                <h5 class="col-md-8" style="margin-top: 4vh; font-size: 22px">{{ project.title }}</h5>
                <p>{{ project.description }}</p>
                <div class="col-md-12 row"
                  style="border: 2px solid brown; height: 25vh; text-align:left">
                  <p>Mots Clés</p>
                  <div v-for="data in keys" class="circle" :class="data.class" :style="data.shape" :key="data.index">
                    {{data.tech}}
                  </div>
                </div>
              </div>
              <transition name="fade-out">
              <span class="col-md-1 align-end" @click="closeModal">
                <a  class="col-md-2" style="margin-top: 3vh; color: brown !important">
                  <i class="fas fa-times" ></i>
                </a>
              </span>
              </transition>
          </div>
        </div>
      </div>
    </div>
  </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      openedModal: false,
      projectSelected: [],
      keys: [],
      projects: [
        {
          title: 'OffBook',
          img: 'projet1',
          link: 'https://github.com/oliviapycz/OffBookProject',
          keywords: [
            {
              tech: 'In Progress',
              shape: 'width: 7vw; height: 14vh; top: 9vh; line-height: 85px'
            },
            {
              tech: 'MySQL',
              shape: 'width: 6vw; height: 12vh; top: 1vh; left:18vh; line-height: 75px'
            },
            {
              tech: 'Nodejs',
              shape: 'width: 7vw; height: 14vh; top: 7vh; left: 34vh; line-height: 85px'
            },
            {
              tech: 'VueJS',
              shape: 'width: 8vw; height: 16vh; top: 2vh; right: 5vh; line-height: 100px'
            }
          ],
          description: 'Projet de fin d\'étude en cours. Site de type Blog pour enregistrer des livres dans son dashboard. Possibilité d\'ajout, de suppression, de modification. Système d\'authentification en place.'
        },
        {
          title: 'Hackeuses!',
          img: 'projet2',
          link: 'https://hackeuses.github.io/Hackeuses/',
          // keywords: ['VueJS', 'Bootstrap', 'To share'],
          keywords: [
            {
              tech: 'Bootstrap',
              shape: 'width: 7vw; height: 14vh; top: 9vh; line-height: 85px'
            },
            {
              tech: 'Meta Tag',
              shape: 'width: 6vw; height: 12vh; top: 1vh; left:18vh; line-height: 75px'
            },
            {
              tech: 'Github Page',
              shape: 'width: 7vw; height: 14vh; top: 7vh; left: 34vh; line-height: 85px'
            },
            {
              tech: 'VueJS',
              shape: 'width: 8vw; height: 16vh; top: 2vh; right: 5vh; line-height: 100px'
            }
          ],
          description: 'Petit projet responsive en VueJS avec possibilité de modifier la langue fr/en et d\'envoyer un message.'
        },
        {
          title: 'Stupid Pic',
          img: 'projet3',
          link: 'https://pwagram-7a3f2.firebaseapp.com/',
          // keywords: ['PWA', 'Firebase', 'Material'],
          keywords: [
            {
              tech: 'PWA',
              shape: 'width: 7vw; height: 14vh; top: 9vh; line-height: 85px'
            },
            {
              tech: 'Material',
              shape: 'width: 6vw; height: 12vh; top: 1vh; left:18vh; line-height: 75px'
            },
            {
              tech: 'Firebase',
              shape: 'width: 8vw; height: 16vh; top: 7vh; left: 30vh; line-height: 100px'
            },
            {
              tech: 'Mobile',
              shape: 'width: 6vw; height: 12vh; top: 1vh; left:48vh; line-height: 75px'
            },
            {
              tech: 'Tuto',
              shape: 'width: 6vw; height: 12vh; top: 10vh; right: 2vh; line-height: 75px'
            }
          ],
          description: 'Ce projet a eu pour objectifs de monter en compétences sur les Progressive Web App, avec son système de cache, la synchronisation en offline, l\'utilisation de la caméra et de la géolocalisation du téléphone.'
        },
        {
          title: 'The Zodiac Game',
          img: 'projet4',
          link: 'https://oliviapycz.github.io/ProjectZodiacGame/',
          // keywords: ['JS native', 'Responsive', 'First Project Solo'],
          keywords: [
            {
              tech: 'JS native',
              shape: 'width: 7vw; height: 14vh; top: 9vh; line-height: 85px'
            },
            {
              tech: 'mini Jeu',
              shape: 'width: 6vw; height: 12vh; top: 1vh; left:18vh; line-height: 75px'
            },
            {
              tech: 'Responsive',
              shape: 'width: 7vw; height: 14vh; top: 7vh; left: 34vh; line-height: 85px'
            },
            {
              tech: 'First Project',
              shape: 'width: 8vw; height: 16vh; top: 2vh; right: 5vh; line-height: 100px'
            }
          ],
          description: 'Jeu de type pierre/feuille/ciseaux. 100% JS.Code Cheat à découvrir sur le repository Github pour ajouter un nouveau personnage. Encore quelques petits bugs.'
        },
        {
          title: 'Soleil Blaise',
          img: 'projet5',
          link: 'http://soleilblaise.org/',
          // keywords: ['Wordpress', 'OVH', 'Tuto vidéo'],
          keywords: [
            {
              tech: 'Wordpress',
              shape: 'width: 7vw; height: 14vh; top: 9vh; line-height: 85px'
            },
            {
              tech: 'OVH',
              shape: 'width: 6vw; height: 12vh; top: 1vh; left:18vh; line-height: 75px'
            },
            {
              tech: 'Tutos vidéos',
              shape: 'width: 7vw; height: 14vh; top: 7vh; left: 34vh; line-height: 85px'
            },
            {
              tech: 'Stage 1 mois',
              shape: 'width: 8vw; height: 16vh; top: 2vh; right: 5vh; line-height: 100px'
            }
          ],
          description: 'Site Wordpress réalisé dans le cadre d\'un stage.'
        },
        {
          title: 'MusicLab',
          img: 'projet6',
          link: 'https://oliviapycz.github.io/MusicLab/',
          // keywords: ['HTML', 'CSS', 'Github', 'Team work', 'Beginner'],
          keywords: [
            {
              tech: 'HTML',
              shape: 'width: 6vw; height: 12vh; top: 11vh; line-height: 75px'
            },
            {
              tech: 'CSS',
              shape: 'width: 6vw; height: 12vh; top: 1vh; left:13vh; line-height: 75px'
            },
            {
              tech: 'Github',
              shape: 'width: 7vw; height: 14vh; top: 5vh; left: 28vh; line-height: 85px'
            },
            {
              tech: 'Team work',
              shape: 'width: 8vw; height: 16vh; top: 8vh; right: 14vh; line-height: 100px'
            },
            {
              tech: 'Beginner',
              shape: 'width: 6vw; height: 12vh; top: 1vh; right: 2vh; line-height: 75px'
            }
          ],
          description: 'Réalisation d\'une landing page en équipe de trois sur un délai de 3 jours.'
        }
      ]
    }
  },
  methods: {
    triggerModal (title) {
      this.openedModal = true
      this.projectSelected = [this.projects.find((projet) => projet.title === title)]
      this.keys = this.projectSelected[0].keywords
      document.getElementById('test').style.zIndex = '-10'
    },
    closeModal () {
      this.openedModal = false
      document.getElementById('test').style.zIndex = '0'
    }
  }
}
</script>

<style lang="css">
#projets {
  background-color: rgba(165, 42, 42, 0.7);
  height: 90vh;
  width: 100vw;
}
.projets {
  margin-top: 20px;
  height: 30vh;
  padding: 5px 8px !important;
  border: 2px solid lightgrey;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0px lightgrey;
  margin-bottom: 10px !important;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  cursor: pointer;
  transition: all 400ms ease-out;
  transform: scale(1);
}
.projets:hover {
  transition: all 400ms ease-in;
  transform: scale(1.2);
  z-index: 2;
}
.projet1 {
  background-image: url(../assets/offbooks-screenshot.jpg);
}
.projet2 {
  background-image: url(../assets/hackeuses-screenshot.jpg);
}
.projet3 {
  background-image: url(../assets/stupidpic-screenshot.jpg);
}
.projet4 {
  background-image: url(../assets/zodiac-screenshot.jpg);
}
.projet5 {
  background-image: url(../assets/ssb-screenshot.jpg);
}
.projet6 {
  background-image: url(../assets/musiclab-screenshot.jpg);
}
h6 {
  background-color: red;
  opacity: 0.8;
  height: 5vh;
  line-height: 33px;
  margin-top: 10vh !important;
}
span {
  font-size: 22px;
  padding: inherit !important;
  cursor: pointer;
  height: 10vh;
}
.modale {
  /*border: 2px solid lightgreen;*/
  box-shadow: 3px 3px 3px grey;
  background-color: white;
  z-index: 500;
  position: absolute;
  left: 5%;
  top: 23%;
  margin: auto;
  height: 67vh;
  padding: inherit !important
}
.circle {
  border-radius: 50%;
  border: 1px solid brown;
  text-align: center;
  position: absolute;
  color: white;
  background-color: brown;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.2s;
  transition-delay: 0.2s;
}

.fade-out-enter-active {
  transition: opacity 0.2s;
  transition-delay: 0.2s;
}
.fade-out-enter {
  opacity: 0;
}
.pulse {
  animation: pulse 0.5s ease-in infinite;
}
@keyframes pulse{
  25%  {transform: scale(0.9);}
  75%  {transform: scale(1.1);}
}
</style>
