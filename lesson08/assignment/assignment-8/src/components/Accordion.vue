<template>
  <div class="accordion-wrapper">
    <p>
      <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        More Info >
      </a>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body p-2">
        <!-- String templating for hot swapping content, and a vue filter 'capitalize for formatting' -->
        <h3>{{header | capitalize}}</h3>
        <p class="mb-1">Sometimes it is nice to hide content from the user</p>
        <!-- Bootstrap for style -->
        <ul class="mt-2 pl-0">
          <!-- Looping over UL items instead of hard coding-->
          <li v-for="item in list" v-bind:key="item.id">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Accordion',
    // A filter to capitalize a value
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.toUpperCase()
      }
    },
    data() {
      //Flexible data for content
      return {
        header: 'a vue filter is capitalizing this!',
        content: 'Sometimes it is nice to hide content from the user',
        list: [
          {name: 'list item 1', id: 0},
          {name: 'list item 2', id: 1}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Getting rid of bullets for UL-->
<style scoped>
  li {
    list-style-type: none;
  }
</style>
