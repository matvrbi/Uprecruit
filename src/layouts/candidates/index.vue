<template>
  <div class="component">
    <div class="header">
      <img class="logo"
           src="https://app.uprecruit.com/img/logo.686e9096.svg">
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'layouts-candidates-index',
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
