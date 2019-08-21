//Importing routes from ./component folder
import Vue from 'vue'
import Router from 'vue-router'
import Navigation from '@/components/Navigation'
import Accordion from '@/components/Accordion'
import Images from '@/components/Images'
import Grid from '@/components/Grid'
import Jumbo from '@/components/Jumbo'

Vue.use(Router)

//All my routes, each route has one component
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Jumbo
    },
    {
      path: '/accordion',
      name: 'Accordion',
      component: Accordion
    },
    {
      path: '/images',
      name: 'Images',
      component: Images
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    }
  ]
})
