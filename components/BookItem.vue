<template>

  <v-col cols='4'>
    <v-card class='d-flex flex-column justify-space-between fill-height'>
      <v-img
        contain
        aspect-ratio='1.5'
        :src='book.image'
        max-height="300"
        class="mt-2"
      />
      <v-divider class="my-3"/>
      <v-card-title>"{{ book.title }}"</v-card-title>
      <v-card-text class='mt-auto'>
        <h3 class='mb-2'><span class="blue-grey--text">Авторы: </span>{{ book.authors }}</h3>
        <h3 class='text-center'>{{ book.publishedDate }}</h3>
        <h2 v-if="book.price>0" class="my-3 text-center red--text">{{book.price}} <span class="lime--text">₴</span></h2>
      </v-card-text>
      <v-divider />

      <div class='d-flex justify-center my-3'>

        <v-btn color='teal'
               class='white--text'
               @click.stop='openBookForm'
               large
               v-if='book.price>0'>Заказать
        </v-btn>

        <v-btn @click.stop='openBookForm'
               disabled
               v-else>Нет в наличии
        </v-btn>
      </div>
    </v-card>
  </v-col>


</template>

<script>
export default {
  name: 'BookItem',
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  methods: {
    openBookForm() {
      this.$store.commit('book/setCurrentBook', this.book)
      this.$emit('openBook')
    }
  }
}
</script>
