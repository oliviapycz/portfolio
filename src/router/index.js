import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Presentation from '@/components/Presentation'
import Parcours from '@/components/Parcours'
import Competences from '@/components/Competences'
import Projets from '@/components/Projets'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Presentation',
      name: 'Presentation',
      component: Presentation
    },
    {
      path: '/Parcours',
      name: 'Parcours',
      component: Parcours
    },
    {
      path: '/Competences',
      name: 'Competences',
      component: Competences
    },
    {
      path: '/Projets',
      name: 'Projets',
      component: Projets
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
