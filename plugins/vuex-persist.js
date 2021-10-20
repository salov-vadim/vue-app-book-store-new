import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    paths: ['cart']
  }).plugin(store)
}
