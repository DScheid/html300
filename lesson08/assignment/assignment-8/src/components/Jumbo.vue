<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1>{{header}}</h1>
      <p>{{content}}</p>
      <ul class="pl-0">
        <li v-for="feature in features" v-bind:key="feature.id">{{feature.name}}</li>
      </ul>
    </div>
    <!-- Using a V-on v-if and v-bind for toggling style and content-->
    <button class="mt-4" v-on:click="toggle = !toggle">Click Me!</button>
    <h1 v-if="toggle" v-bind:class="errorClass">Click the navigation tabs above!</h1>
    <h1 v-else>Make yourself at home</h1>
  </div>
</template>

<script>
  export default {
    name: 'Jumbo',
    data() {
      return {
        toggle: false,
        errorClass: 'text-danger',
        header: 'Welcome to my Assignment 7!',
        content: 'In this website, we are showcasing:',
        features: [
          {name: 'Vue.js', id: 0},
          {name: 'Bootstrap 4', id: 1}
        ]
      }
    }
  }
</script>

<style scoped>
  li {
    list-style-type: none;
  }
</style>
