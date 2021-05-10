<template>
  <div>
    <PrincipalSection />
    <Search />
  </div>
  
</template>

<script>
  import { 
    PrincipalSection,  
    Search
  } from '../components/index'

  export default {
    name: 'Home',

    components: {
      PrincipalSection,
      Search
    },
  }
</script>
