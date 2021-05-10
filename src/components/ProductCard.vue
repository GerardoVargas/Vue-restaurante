<template>
    <v-col cols="12" sm="6" lg="4">
        <v-card
          class="mx-auto"
          max-width="350"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="src"
          ></v-img>
          <v-card-title>
            {{data.titulo}}
          </v-card-title>
          <v-card-action >
            <v-row>
              <v-col cols="6">
                <h3 class="px-4">$ {{data.precio}}</h3>
              </v-col>
              <v-col cols="12">
                <v-row>
                  <v-col cols="6">
                    <v-col cols="12" lg="2">
                      <v-btn class="warning">
                        Ver más
                      </v-btn>
                    </v-col>
                  </v-col>
                  <v-col cols="6">
                    <v-col cols="12" lg="2">
                      <v-btn class="warning">
                        Agregar
                        <v-icon right>mdi-cart</v-icon>
                      </v-btn>
                    </v-col>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-action>
        </v-card>
       </v-col>
</template>

<script>
import { Button } from './index'

export default {
  name: 'ProductCard',
  components: {
    Button
  },
  props: {
    src: {
      type: String
    },
    data: {
      type: Object
    }
  }
}
</script>