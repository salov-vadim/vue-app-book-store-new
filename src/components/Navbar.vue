<template>
  <v-container fluid style="padding: 0">
    <v-app-bar color="blue-grey darken-4" class="px-4" dark>
      <router-link to="/"
                   style="color: teal; text-decoration: none"
                   class="text--lighten-3"
      ><h2>BOOKSTORE</h2>
      </router-link>


      <v-spacer/>

      <router-link to="/cart" style="text-decoration: none; color: teal">
        <v-icon dark class="mr-2">
          mdi-cart-variant
        </v-icon>
        <span>{{ getCartItems.length }} items</span>
        <span class="ml-2">({{ getTotal }} UAH)</span>
      </router-link>

    </v-app-bar>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters(['getCartItems', 'getTotal'])
  }
}
</script>