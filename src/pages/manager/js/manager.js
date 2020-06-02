export default {
  computed: {
    defaultActive: function () {
      // console.log('tag', this.$route.path.replace('/', ''))
      return this.$route.path.replace('/', '');
    }
  },
}
