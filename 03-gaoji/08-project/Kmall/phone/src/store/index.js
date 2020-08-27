import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';
import state from './state.js';

export default new Vuex.Store({
    actions,
    getters,
    mutations,
    state
})
