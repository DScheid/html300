<template>
  <div>
    <div>
      <!-- For loop for putting in images/links -->
      <img v-for="item in list" v-bind:key="item.id" class="d-block" :src="item.src" alt="slide">
    </div>
  </div>
</template>

<!-- Putting all my flexible text fields into a data structure for traversal -->
<script>
  export default {
    name: 'Accordion',
    data() {
      return {
        header: 'Drop Down',
        content: 'Sometimes it is nice to hide content from the user',
        list: [
          {src: 'https://www.gannett-cdn.com/presto/2019/02/01/USAT/2af52e69-3fd1-4438-99d7-487a9b51d03c-GettyImages-878868924.jpg', id: 0},
          {src: 'https://www.cbre.com/-/media/tcc_hsr/countrytcc/images/bu-icons/tcc_buicon_sea.jpg', id: 1},
          {src: 'https://assets3.thrillist.com/v1/image/2755981/size/tl-full_width_tall_mobile.jpg', id: 2},
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
