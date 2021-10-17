import Vue from 'vue'
import Vuex from 'vuex'
import HelloWorld from './modules/hello-world'

Vue.use(Vuex);

const getters = {};

const actions = {};

export default new Vuex.Store({
    actions: actions,
    getters: getters,
    modules: {
        HelloWorld
    }
})
