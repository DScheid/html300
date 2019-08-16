<template>
  <div class="mb-3">
    <nav>
      <router-link class="spacing" v-for="routes in links" v-bind:key="routes.id" :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    //Listing out all my routes
    data() {
      return {
        links: [
          {
            id: 0,
            text: 'Home',
            page:'/'
          },
          {
            id: 1,
            text: 'Accordion',
            page:'/accordion'
          },
          {
            id: 2,
            text: 'Images',
            page:'/images'
          },
          {
            id: 3,
            text: 'Grid',
            page:'/grid'
          }
        ]
      }
    }
  }
</script>

<style>
  .spacing {
    margin-right: 20px;
  }
</style>
