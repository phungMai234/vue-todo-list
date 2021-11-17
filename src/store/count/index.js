import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const count = {
    state: () => ({
        count: 0,
    }),
    getters,
    actions,
    mutations,
};

export default count;
