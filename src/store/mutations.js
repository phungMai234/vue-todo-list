const mutations = {
    increment(state, payload) {
        state.count += payload.step;
    },
    decrement(state, payload) {
        state.count -= payload.step;
    },
};
export default mutations;
