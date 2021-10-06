<template>
  <div class="table">
   <v-container>
     <h2 class="text-center my-5">Купленные книги</h2>
     <v-data-table
         :headers="headers"
         :items="getCartItems"

         class="elevation-1"
     >
       <template v-slot:item.image="{ item }">
         <v-img

             aspect-ratio="0.5"
             :src="item.image"></v-img>
       </template>
     </v-data-table>
     <v-spacer/>

     <v-row class="justify-end my-3">
      <v-col>
        <h3>Сумма: {{getTotal}} </h3>
      </v-col>
     </v-row>
     <v-divider class="my-5"></v-divider>
    <v-row class="d-flex justify-center">
      <v-btn class="text-center" @click="checkout">Заказать</v-btn>
    </v-row>
   </v-container>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "CartPage",
  data() {
    return {
      headers: [
        {
          text: 'Книга',
          align: 'start',
          sortable: false,
          value: 'image',
        },
        { text: 'Описание', value: 'description' },
        { text: 'Цена', value: 'price' }
      ],
    }
  },
  computed: {
    ...mapGetters(['getCartItems', 'getTotal'])
  },
  methods: {
    ...mapMutations(['setTotal']),
    checkout(){
        this.setTotal(this.getTotal)
        this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>