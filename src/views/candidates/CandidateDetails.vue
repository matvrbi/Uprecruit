<template>
  <div class="candidateDetails">
    <v-progress-circular
        v-if="isLoading"
        :indeterminate="isLoading"
        color="primary"
    />
    <router-link :to="{ name: 'Candidates' }">
      <v-btn color="primary">Back</v-btn>
    </router-link>
    <v-card
        v-if="candidate && isValidCandidateId"
        class="mt-5"
    >
      <v-card-title>Candidate details:</v-card-title>
      <candidate-avatar :candidate="candidate" />
      <v-card-text>ID: {{ candidate.id }}</v-card-text>
      <v-card-text>First name: {{ candidate.first_name }}</v-card-text>
      <v-card-text>Last name: {{ candidate.last_name }}</v-card-text>
    </v-card>
    <h1 v-if="!isValidCandidateId">
      Invalid candidate ID
    </h1>
  </div>
</template>

<script>
import CandidatesService from '@/services/candidates';

export default {
  name: 'CandidateDetails',
  components: {
    CandidateAvatar: () => import('@/components/CandidateAvatar.vue'),
  },
  data() {
    return {
      isLoading: false,
      candidate: null,
      isValidCandidateId: true,
    }
  },
  computed: {
    candidateId() {
      return this.$route.params.id;
    },
  },
  created() {
    this.isValidCandidateId = +this.candidateId;
  },
  async mounted() {
    try {
      if (this.isValidCandidateId) {
        this.isLoading = true;
        this.candidate = await CandidatesService.getDriver(this.candidateId);
      }
    } catch (error) {
      this.isValidCandidateId = false;
    } finally {
      this.isLoading = false;
    }
  },
}
</script>

<style scoped lang="scss">
</style>
