<template>
  <v-form @submit.prevent="setBooks(text)" v-model="valid" ref="form">
    <v-container>
      <v-row>
        <v-col cols="10">
          <v-text-field class=""
                        v-model.trim="text"
                        placeholder="Javascript"
                        label="Название книги"
                        color="teal"
                        filled
                        :counter="50"
                        :rules="[rules.required, rules.counter]"/>
        </v-col>
        <v-col cols="2">
          <v-btn type="submit"
                 :disabled="getLoading || !valid"
                 :loading="getLoading"
                 class="white--text"
                 x-large
                 elevation="3"
                 color="teal">Отправить</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import {mapGetters, mapState, mapActions} from "vuex";

export default {
  name: "SearchForm",

  data: () => ({
    text: '',
    valid: true,
    rules: {
      required: value => !!value || 'Не заполнено',
      counter: value => value.length <= 50 || 'Не более 50-ти символов',
    },
  }),
  computed: {
    ...mapState(['loading']),
    ...mapGetters(['getLoading'])
  },
  methods: {
    ...mapActions(['setBooks'])
  }
}
</script>

<style scoped>

</style>