<template>
  <div class='cart my-5'>
    <v-container>

      <h2 class='text-center my-5'>Выбранные книги</h2>

      <v-data-table
        :headers='headers'
        :items='getCartItems'
        class='elevation-1'>
        <template v-slot:item.image='{ item }'>
          <v-img
            contain
            width='100'
            aspect-ratio='0.5'
            :src='item.image' />
        </template>
      </v-data-table>

      <v-card-title class='justify-end mt-3 pr-2'
                    v-if='getTotal'>Сумма: {{ getTotal }} UAH
      </v-card-title>

      <v-divider class='my-5'></v-divider>

      <v-row class='d-flex justify-center'>
        <v-btn class='text-center white--text mt-2'
               @click='checkout'
               color='teal'
               x-large
               :disabled='!getCartItems.length'>Заказать
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      headers: [
        {
          text: 'Книга',
          align: 'start',
          sortable: false,
          value: 'image'
        },
        { text: 'Описание', value: 'description' },
        { text: 'Цена', value: 'price' }
      ]
    }
  },
  computed: {
    ...mapGetters('cart', ['getCartItems', 'getTotal'])
  },
  methods: {
    ...mapMutations('cart', ['setTotal']),
    ...mapMutations('book', ['showAlert']),
    checkout() {
      this.setTotal(this.getTotal)
      this.showAlert()
      this.$store.dispatch('book/hideAlert')
      this.$router.push('/')
    }
  }
}
</script>
