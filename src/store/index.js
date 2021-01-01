import Vue from 'vue';
import Vuex from 'vuex';

import Store from 'electron-store';

Vue.use(Vuex);
const persistentStore = new Store();

let expired = persistentStore.get('expired') || false;
let left = persistentStore.get('left') || 20;

left = left - 1;

if (left < 0) {
  expired = true;
}

persistentStore.set('expired', expired);

persistentStore.set('left', left);

export default new Vuex.Store({
  state: {
    pc: persistentStore.get('pc') || [],
    psw: 'test',
    isLogged: false,
    left,
    expired,
  },
  mutations: {
    addPc: (state, pc) => {
      const tmp = state.pc;
      tmp.push(pc);
      state.pc = tmp;
      persistentStore.set('pc', tmp);
    },
    removePc: (state, index) => {
      const tmp = state.pc;
      tmp.splice(index, 1);
      state.pc = tmp;
      persistentStore.set('pc', tmp);
    },
    login: (state) => {
      state.isLogged = true;
      persistentStore.set('isLogged', true);
    },
  },
  actions: {
    addNewPc: ({ commit }, pc) => {
      commit('addPc', pc);
    },
    removePcAction: ({ commit }, index) => {
      commit('removePc', index);
    },
  },
  getters: {
    getAllPC: (state) => {
      return state.pc;
    },
  },
  modules: {},
  // plugins: [createPersistedState(), createSharedMutations()],
});
