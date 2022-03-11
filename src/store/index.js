import { createStore } from 'vuex'
export const store = createStore({
    state() {
        return {
            count: 1
        }
    },
    mutations: {
        increase(state) {
            state.count++
        }
    },
    actions: {
        increase({ commit }) {
            commit('increase')
        }
    }
})