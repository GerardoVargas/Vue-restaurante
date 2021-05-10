<template>
 <div>
    <v-app-bar app class="green lighten-1">

    <v-app-bar-nav-icon 
      class="hidden-lg-and-up" 
      dark
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-tabs centered dark class="hidden-sm-and-down">
      <v-tab v-for="(item, i) in menu" :key="i" :to="item.link">{{item.title}}</v-tab>
    </v-tabs>

    <v-spacer></v-spacer>
    <v-btn icon dark class="pr-2">
      <v-badge
        color="warning"
        content="2"
        class="mt-2"
        v-if="!isEmpty"
      >
        <v-icon right>
          mdi-cart
        </v-icon>
      </v-badge>

      <v-icon 
        right
        v-else
      >
        mdi-cart
      </v-icon>
        
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer 
    class="hidden-lg-and-up"
    v-model="drawer"  
    absolute
      left
      temporary
  >
    <v-list
      v-for="(item, i) in menu"
      :key="i"
    >
      <v-list-item
        :to="item.link"
      >
        {{item.title}}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
 </div>
</template>

<script>
  export default {
    name: 'Header',
    data(){
      return {
        menu: [
          {title: 'Inicio', link:'/'},
          {title: 'Nosotros', link:'/about'},
          {title: 'Nueva receta', link:'/form'},
        ],
        drawer: false
      }
    }
  }
</script>
