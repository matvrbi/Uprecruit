<template>
  <div class="component">
    <div class="header">
      <img class="logo" src="https://uprecruit.com/wp-content/uploads/2020/01/testing-logo-white.png">
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'layouts-peoples-index',
  watch: {},
  props: {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {
  },
  mounted() {
  },
  beforeDestroy() {
  },
  mixins: [],
  components: {}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  background: rgba(50, 178, 219);
  padding: 15px;

  .logo {
    width: 125px;
  }
}
</style>
