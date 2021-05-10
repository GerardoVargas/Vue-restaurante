<template>
  <v-container>
    <v-row>
      
        <ProductCard 
          v-for="(item, i) in $store.state.productos"
          :key="i"
          :src="item.imagen"
          :data="item"
        />
     
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from './ProductCard'

export default {
  components: {
    ProductCard
  },
  name: 'FoodGrid'
}
</script>