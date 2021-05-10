<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="align-center">
        <v-img
          max-height="450"
          max-width="800"
          contain
          :src="url"
        ></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6">
        <h2>{{nombre}}</h2> 
         
      </v-col>
      <v-col cols="12" lg="6">
        <h2>$ {{precio}}</h2> 
         
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6">
        <p>{{descripcion}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name:'DishDetails',
  data(){
    return {
      url: this.$route.params.data.imagen,
      nombre: this.$route.params.data.nombre,
      precio: this.$route.params.data.precio,
      descripcion: this.$route.params.data.descripcion,
    }
  }
}
</script>