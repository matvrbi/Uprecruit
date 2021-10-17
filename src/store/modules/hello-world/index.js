import * as types from './mutation-types'

// initial state
const state = {
    random: null
};

// getters
const getters = {
    random(state) {
        return state.random;
    }
};

// actions
const actions = {};

// mutations
const mutations = {
    [types.RANDOM](state, random) {
        state.random = random;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
};