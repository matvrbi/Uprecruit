<template>
  <div class="candidates">
    <v-progress-circular
        v-if="isLoading"
        :indeterminate="isLoading"
        color="primary"
    />
    <div v-if="candidates">
      <h1>Candidates</h1>
      <v-btn
          color="primary"
          class="my-4"
          @click="clearSortAndFilters"
      >
        Clear sort and filters
      </v-btn>
      <div class="d-flex">
        <v-select
          v-model="selectedSort"
          :items="sortValues"
          item-text="label"
          item-value="value"
          label="Sort"
          class="mr-5"
          @change="sortChanged"
        />
        <v-select
            v-model="selectedFilter"
            :items="filteredValues"
            item-text="label"
            item-value="value"
            label="Filter"
            @change="filterChanged"
        />
      </div>
      <v-list>
        <v-list-item
            v-for="({ id, first_name }) in convertedCandidates"
            :key="id"
        >
          <v-list-item-content>
            <router-link :to="{ name: 'CandidateDetails', params: { id } }">
              {{ first_name }}
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script type="text/babel">
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Candidates',
  data() {
    return {
      isLoading: false,
      sortValues: [
        { value: 'asc', label: 'ASC'},
        { value: 'desc', label: 'DESC' }
      ],
      filteredValues: [
        { value: 'shortNames', label: 'Short names' },
        { value: 'shortSurnames', label: 'Short surnames' }
      ],
      selectedSort: 'asc',
      selectedFilter: null,
      convertedCandidates: null,
    }
  },
  methods: {
    ...mapActions('candidates', ['fetchCandidates']),
    sortChanged(value) {
      this.convertedCandidates.sort((a, b) => {
        return value === 'asc' ? a.id - b.id : b.id - a.id;
      });
    },
    filterChanged(value) {
      if (value === 'shortNames') {
        this.convertedCandidates = this.candidates.filter(({ first_name }) => first_name.length <= 3);
      } else {
        this.convertedCandidates = this.candidates.filter(({ last_name }) => last_name.length <= 5);
      }
    },
    clearSortAndFilters() {
      this.selectedSort = 'asc';
      this.selectedFilter = null;
      this.convertedCandidates = [...this.candidates]
    },
  },
  computed: {
    ...mapState({
      candidates: (state) => state.candidates.candidates,
    }),
  },
  async mounted() {
    try {
      this.isLoading = true;
      await this.fetchCandidates();
      this.convertedCandidates = [...this.candidates];
    } finally {
      this.isLoading = false;
    }
  },
}

</script>

<style scoped lang="scss">
.candidates {
  &__list {
    h1 {
      margin-bottom: 1rem;
    }
  }
}
</style>
