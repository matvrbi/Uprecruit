import * as types from './mutation-types'

// initial state
const state = {
    boilerplate: false
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
    [types.BOILERPLATE](state, bool) {
        state.boilerplate = bool;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
};