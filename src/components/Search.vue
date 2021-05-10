<template>
  <v-container>
    <v-row>
      <v-col
        class="my-4"
        cols="12"
      >
      <v-form>
        <Input  />
        <Button />
      </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Input, Button } from './index'

export default {
  name: 'Search',
  components: {
    Input,
    Button
  },
  data(){
    return {
      
    }
  }
}
</script>
