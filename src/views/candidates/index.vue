<template>
  <div class="component">
    <div class="container--fluid">
      <h1>Candidates</h1>
      {{ result }}
    </div>
  </div>
</template>

<script type="text/babel">
import CandidatesService from '@/services/candidates'

export default {
  name: 'views-orders-index',
  watch: {},
  props: {},
  data() {
    return {
      result: undefined
    }
  },
  methods: {
    getCandidates() {
      return CandidatesService.getCandidates()
          .then((result) => {
            this.result = result;
          })
    },
  },
  computed: {},
  created() {
  },
  mounted() {
    this.getCandidates();
  },
  beforeDestroy() {
  },
  mixins: [],
  components: {}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
