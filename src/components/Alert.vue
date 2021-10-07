<template>
  <transition name="fade">
    <v-alert
        v-if="$store.getters.getAlert"
        color="teal"
        dense
        dismissible
        type="info"
        style="position: fixed; left: 35%"
    >Ваш заказ на сумму {{this.$store.getters.getTotalOrder}} оформлен! </v-alert>
  </transition>

</template>

<script>
export default {
  name: "Alert",
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .9s;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
</style>