import CandidatesService from '@/services/candidates';

const state = {
    candidates: null
};

const actions = {
    async fetchCandidates({ commit, state }) {
        if (!state.candidates) {
            const data = await CandidatesService.getCandidates();
            commit('setCandidates', data);
        }
    }
};

const mutations = {
    setCandidates(state, payload) {
        state.candidates = payload;
    }
};

export default {
    state,
    actions,
    mutations,
    namespaced: true
};
