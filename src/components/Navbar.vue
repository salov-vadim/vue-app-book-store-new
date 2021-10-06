<template>
  <v-container fluid>
    <v-app-bar color="blue-grey darken-4" dark>
        <router-link to="/">BStore</router-link>
      <v-spacer/>
        <router-link to="/cart">
          <v-icon dark>
            mdi-cart-variant
          </v-icon>

        </router-link>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>