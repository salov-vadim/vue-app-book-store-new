<template>

  <v-col cols="4">
    <v-card class="d-flex flex-column justify-space-between fill-height">
      <v-img
          contain
          aspect-ratio="1.5"
          :src="book.image"
      />

      <v-divider/>

      <v-card-title>{{book.title}}</v-card-title>

      <v-card-text class="mt-auto">
        <h3 class="mb-2">{{book.authors}}</h3>
        <h3 class="text-center">{{book.publishedDate}}</h3>
      </v-card-text>
      <v-divider/>

      <div class="d-flex justify-center mt-5 mb-5">

        <v-btn color="teal"
               class="white--text"
               @click.stop="openBookForm"
               large
               v-if="book.price>0">Заказать</v-btn>

        <v-btn @click.stop="openBookForm"
               disabled
               v-else>Нет в наличии</v-btn>
      </div>
    </v-card>
  </v-col>


</template>

<script>
export default {
  name: "BookItem",
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  methods: {
    openBookForm() {
      this.$store.commit('setCurrentBook', this.book)
      this.$emit('openBook')
    }
  }
}
</script>