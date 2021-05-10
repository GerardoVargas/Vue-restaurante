<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="10"
        md="8"
        lg="6"
      >
        <h1 class="text-center">Nuevo Platillo</h1>
        <v-card class="mt-10">
          <v-text-field
            ref="name"
            v-model="newDishItem.nombre"
            label="Nombre del producto"
            placeholder="Salchipapas"
            required
            outlined
          ></v-text-field>
          <v-text-field
            ref="price"
            v-model="newDishItem.precio"
            label="Precio del producto"
            placeholder="50.00"
            required
            outlined
          ></v-text-field>
          <v-text-field
            ref="description"
            v-model="newDishItem.descripcion"
            label="Descripcion del producto"
            placeholder="Salchipapas"
            required
            outlined
          ></v-text-field>
          <v-divider class="mt-12"></v-divider>

          <v-card-actions>
          <v-btn text color="error">
            Cancelar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="addNewDish()"
          >
            Guardar
          </v-btn>
        </v-card-actions>



        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Form',
    data(){
      return {
        newDishItem: {
          id: this.$store.getters.getProducts.length + 1,
          nombre: '',
          precio: '',
          descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
          imagen: 'https://cdn.vox-cdn.com/thumbor/9qN-DmdwZE__GqwuoJIinjUXzmk=/0x0:960x646/1200x900/filters:focal(404x247:556x399)/cdn.vox-cdn.com/uploads/chorus_image/image/63084260/foodlife_2.0.jpg'
        }
      }
    },
    methods: {
      addNewDish(){
        console.log(this.newDishItem.id);
        this.$store.dispatch('addNewDish', this.newDishItem)
        alert('Datos guardados con éxito')
        this.goHome()
      },
      goHome(){
        this.$router.push('/')
      }
    }
  }
</script>