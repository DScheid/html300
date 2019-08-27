<template>
  <div>
    <!-- For each item in our list of images, pass content into the child image component -->
    <div v-for="item in list" v-bind:key="item.id">
      <Img :src="item.src" :title="item.title" :alt="item.alt"></Img>
    </div>
  </div>
</template>


<!-- Putting all my flexible text fields into a data structure for traversal -->
<script>

  import Img from './Img';

  export default {
    name: 'Images',
    components: {
      'Img': Img
    },
    data() {
      return {
        list: [
          {
            src: 'https://www.gannett-cdn.com/presto/2019/02/01/USAT/2af52e69-3fd1-4438-99d7-487a9b51d03c-GettyImages-878868924.jpg', 
            id: 0,
            alt: 'A beautiful picture of the Seattle skyline',
            title: 'Seattle Skyline'
          },
          {
            src: 'https://www.cbre.com/-/media/tcc_hsr/countrytcc/images/bu-icons/tcc_buicon_sea.jpg', 
            id: 1,
            alt: 'Another beautiful picture of the Seattle skyline',
            title: 'Seattle Harbor'
          },
          {
            src: 'https://assets3.thrillist.com/v1/image/2755981/size/tl-full_width_tall_mobile.jpg', 
            id: 2,
            alt: 'Yet another beautiful picture of the Seattle skyline',
            title: 'Pike Place Market'
          }
        ]
      }
    }
  }
</script>

<!-- Making images not massive -->
<style scoped>
  img {
    width: 50vw;
  }
</style>
