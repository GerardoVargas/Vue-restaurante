<template>
  <v-container>
    <v-row class="lg-pa-0 lg-ma-0">
      <v-col 
        class="pa-0 ma-0"
        cols="12"
      >
        <v-img
          src="https://www.forksoverknives.com/wp-content/uploads/vegan-quesadilla-recipe-quick-easy-plant-based-recipes.jpg"
          max-height="350" 
        >
          <v-container fill-height>
            <v-row>
              <v-col class="msg">
                <h1 class="text-sm-h4 text-md-h1 text-lg-h2 font-weight-black text-center">¡Sacia tu antojo!</h1>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'PrincipalSection',

    data: () => ({
      
    }),
  }
</script>

<style scoped>
  .msg {
    background-color: rgba(217,220,240,0.5);
  }
</style>
