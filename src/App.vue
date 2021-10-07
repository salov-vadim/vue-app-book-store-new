<template>
  <v-app >
    <Navbar/>
    <transition mode="out-in"
                enter-active-class="animate__animated animate__fadeInLeft"
                leave-active-class="animate__animated animate__fadeOutRight">
      <router-view/>
    </transition>
    <Alert />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Alert from "@/components/Alert";

export default {
  name: 'App',
  components: {
    Alert,
    Navbar
  },
};
</script>

