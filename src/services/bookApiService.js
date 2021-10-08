const apiBase = 'https://www.googleapis.com/books/v1/volumes?q='

const getTransformBooks = (books) => {
  return books.map(book => _transformBook(book))
}

const _transformBook = (book) => {
  return {
    id: book.id,
    title: book.volumeInfo.title,
    image: book.volumeInfo.imageLinks?.thumbnail || 'https://brodilla.com/assets/images/browsers/pictures/epic_browser_1_2.png',
    authors: book.volumeInfo.authors?.join(', '),
    publishedDate: book.volumeInfo.publishedDate?.split('-').reverse().join('.'),
    description: book.volumeInfo.description,
    price: book.saleInfo.listPrice?.amount || 0,
    currency: book.saleInfo.listPrice?.currencyCode || 'UAH'
  }
}

export {
  getTransformBooks, apiBase
}
