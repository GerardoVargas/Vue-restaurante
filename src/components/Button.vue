<template>
  <v-col cols="12" lg="2">
    <v-btn class="warning">
      {{ title ? title : addCarrito ? 'Agregar' : 'Buscar' }}
      <v-icon v-if="!title" right>{{ addCarrito ? 'mdi-cart' : 'mdi-magnify'}}</v-icon>
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
    },
    title: {
      type: String
    }
  }
}
</script>