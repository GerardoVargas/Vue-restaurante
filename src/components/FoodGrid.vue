<template>
  <v-container>
    <v-row>
        <ProductCard 
          v-for="(item, i) in $store.getters.getProducts"
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
  name: 'FoodGrid',
  data(){
    return {   
    }
  }
}
</script>