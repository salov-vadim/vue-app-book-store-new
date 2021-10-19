<template>
  <v-app>
    <Navbar />

    <transition enter-active-class='animate__animated animate__bounceInLeft'>
      <nuxt />
    </transition>

    <Alert />
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'
import Alert from '~/components/Alert'

export default {
  components: { Alert, Navbar }
}
</script>
