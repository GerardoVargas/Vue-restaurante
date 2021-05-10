<template>
  <div>
    <PrincipalSection />
    <Search />
    <FoodGrid />
  </div>
  
</template>

<script>
  import { 
    PrincipalSection,  
    Search,
    FoodGrid
  } from '../components/index'

  export default {
    name: 'Home',

    components: {
      PrincipalSection,
      Search,
      FoodGrid
    },
  }
</script>
