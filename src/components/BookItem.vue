<template>
  <v-col cols="3">
    <v-card class="fill-height">
      <v-img
          v-if="getImageLink"
          contain
          aspect-ratio="1.2"
          :src="getImageLink"
      />
      <v-divider/>

      <v-card-title>{{book.volumeInfo.title}}</v-card-title>
      <v-card-text>
        <h3>{{getAuthors}}</h3>
      </v-card-text>
      <v-card-text>
        <h3 class="text-center">{{getPublishedDate}}</h3>
      </v-card-text>
      <v-divider/>
      <v-spacer/>
      <div class="d-flex justify-center mt-5">
        <v-btn @click="openBookForm">Заказать</v-btn>
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
  computed: {
    getAuthors() {
      return this.book.volumeInfo.authors?.join(',')
    },
    getPublishedDate() {
      return this.book.volumeInfo.publishedDate?.split('-').reverse().join('.')
    },
    getImageLink() {
      return this.book.volumeInfo.imageLinks?.smallThumbnail
    }
  },
  methods: {
    openBookForm() {
      this.$emit('openBookForm')
    }
  }
}
</script>

<style scoped>

</style>