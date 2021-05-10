<template>
  <v-col cols="12" lg="2">
    <v-btn class="warning">
      {{ addCarrito ? 'Agregar' : 'Buscar' }}
      <v-icon right>{{ addCarrito ? 'mdi-cart' : 'mdi-magnify'}}</v-icon>
    </v-btn>
  </v-col>
</template>

<script>
export default {
  name: 'Button',
  props: {
    addCarrito: {
      type: Boolean
    },
    price: {
      type: String
    }
  }
}
</script>