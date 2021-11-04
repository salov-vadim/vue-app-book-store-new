<template>
  <v-dialog v-model="dialogVisible" max-width="600">
    <v-card>

      <v-card-title class="justify-center">Заказ книги</v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-img
                  contain
                  aspect-ratio="1.7"
                  :src="book.image"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <p style="text-indent: 20px">{{ book.description }}</p>
            </v-col>
          </v-row>
          <v-form @submit.prevent ref="form"
                  v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Имя"
                                placeholder="Вадим"
                                v-model="name"
                                :counter="20"
                                :rules="nameRules"
                                solo-inverted
                                color="teal"
                                required/>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="email"
                                placeholder="test@mail.com"
                                :rules="emailRules"
                                label="E-mail"
                                solo-inverted
                                color="teal"
                                required/>
                </v-col>
                <v-col cols="12">
                  <v-text-field type="tel"
                                label="Телефон"
                                placeholder="+38XXXXXXXXXX"
                                v-model="phone"
                                :rules="phoneRules"
                                solo-inverted
                                color="teal"
                                required/>
                </v-col>
              </v-row>

              <v-row class="justify-center ">
                <v-btn type="submit"
                       color="teal"
                       class="my-2 white--text"
                       :disabled="!valid"
                       large
                       @click="addToCart(book)">Отправить
                </v-btn>
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
      v => !!v || 'Имя не може быть пустым',
      v => (v && v.length <= 20) || 'Имя может содержать не более 20 символов',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail не может быть пустым',
      v => /.+@.+\..+/.test(v) || 'E-mail должен быть валидным',
    ],
    phone: '',
    phoneRules: [
      v => !!v || 'Телефон должен быть заполнен',
      v => /^\+?3?8?(0\d{9})$/.test(v) || 'Телефон может начинаться на +38 и содержать только цифры и + вначале',
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