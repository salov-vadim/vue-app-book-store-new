<template>
  <v-form @submit.prevent="searchText">
    <v-container>
      <v-row>
        <v-col cols="10">
          <v-text-field class="" v-model.trim="text"/>
        </v-col>
        <v-col cols="2">
          <v-btn type="submit"
                 :disabled="getLoading"
                 :loading="getLoading"
                 class="white--text"
                 color="purple darken-2">Отправить</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import {mapGetters, mapState, mapActions} from "vuex";

export default {
  name: "SearchForm",
  props:{
    //loading: Boolean
  },
  data: () => ({
    text: ''
  }),
  computed: {
    ...mapState(['loading']),
    ...mapGetters(['getLoading'])
  },
  methods: {
    ...mapActions(['setBooks']),
    searchText() {
      //if (this.text) this.$emit('searchBooks', this.text)
      if(this.text) this.setBooks(this.text)
      this.text = ''
    }
  }
}
</script>

<style scoped>

</style>