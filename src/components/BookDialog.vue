<template>
  <v-dialog v-model="dialogVisible" max-width="600">
    <v-card>
      <v-card-title class="text-center">Заказ книги</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-img
                  contain
                  aspect-ratio="1.7"
                  :src="book.volumeInfo.imageLinks.smallThumbnail"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
                {{ book.volumeInfo.description }}
            </v-col>
          </v-row>
          <v-form @submit.prevent ref="form"
                  v-model="valid"
                  lazy-validation>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Имя"
                              v-model="name"
                              :rules="nameRules"
                              :counter="10"
                              required/>
              </v-col>
              <v-col cols="12">
                <v-text-field  v-model="email"
                               :rules="emailRules"
                               label="E-mail"
                               required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field type="tel"
                              label="Телефон"
                              v-model="phone"
                              :rules="phoneRules"
                              required></v-text-field>
              </v-col>
            </v-row>

            <v-row class="justify-center ">
                <v-btn type="submit"
                       class="my-2"
                       :disabled="!valid" @click="addToCart(book)">Отправить</v-btn>
            </v-row>


          </v-container>
          </v-form>
        </v-container>

      </v-card-text>

    </v-card>
  </v-dialog>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "BookDialog",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    book: {
      type: Object,
      required: true
    }
  },
  created() {
    this.dialogVisible = this.value
  },

  data: () => ({
    dialogVisible: false,
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 15) || 'Name must be less than 2 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    phone: '',
    phoneRules: [
      v => !!v || 'Phone is required',
      v => /^\+?3?8?(0\d{9})$/.test(v) || 'Phone must be valid',
    ]

  }),

  methods: {
    ...mapMutations(['addBookToCart']),
    addToCart(book) {
      this.addBookToCart(book)
      this.$router.push('/cart')
    }
  },

  watch: {
    value(newValue) {
      this.dialogVisible = newValue
    },
    dialogVisible(newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>

<style scoped>

</style>