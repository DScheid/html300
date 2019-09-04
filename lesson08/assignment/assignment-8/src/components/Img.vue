
<template>
  <div>
     <!-- Render image with props passed in from parent, include border if component has been clicked -->
     <img v-if="toggle" class="mb-2" v-bind:class="errorClass" :src="src" :alt="alt" :title="title" v-on:click="toggle=flip(toggle)">
     <img v-else class="mb-2" :src="src" :alt="alt" :title="title" v-on:click="toggle=flip(toggle)">
  </div>
</template>

<!-- Putting all my flexible text fields into a data structure for traversal -->
<script>
  export default {
    name: 'Img',
    mixins: [flip],
    //Declaring props with prop validation
    props: {
      src: {
        type: String
      },
      title: {
        type: String
      },
      alt: {
        type: String
      }
    },
    data() {
      return {
        // How to keep track of images being clicked
        toggle: false,
        // Bootstrap 4 class to add if an image is clicked
        errorClass: "border border-danger"
      }
    }
  }
  //Importing my flip mixin
  import flip from '../mixins/flip.js'
</script>

<!-- Making images not massive -->
<style scoped>
  img {
    width: 50vw;
  }
</style>