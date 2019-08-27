<template>
  <div id="app">
    <!-- Navigation stays always, other content is flexible.  'Welcome' text in the header for slot -->
    <Navigation>Welcome</Navigation>
    <router-view/>
  </div>
</template>

<script>
  // Import navigation for reference in template
  import Navigation from './components/Navigation'
  var mixin = {
    created: function () {
      console.log('mixin hook called')
    }
  }
  export default {
    name: 'app',
    components: {
      'Navigation': Navigation
    }
  }
</script>

<!-- Global Styling -->
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 2rem;
  }
</style>
