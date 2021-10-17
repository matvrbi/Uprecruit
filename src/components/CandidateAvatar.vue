<template>
  <v-avatar
      size="62"
      color="primary"
      class="ml-3"
  >
    <span class="white--text text-h4">{{ candidateInitials }}</span>
  </v-avatar>
</template>

<script>
export default {
  name: 'CandidateAvatar',
  props: {
    candidate: {
      type: Object,
      required: true,
    },
  },
  computed: {
    candidateInitials() {
      const { first_name, last_name } = this.candidate;
      return `${first_name.charAt(0)}${last_name.charAt(0)}`;
    },
  },
}
</script>

<style scoped>

</style>
