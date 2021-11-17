import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const count = {
    state: () => ({
        todos: [
            {
                id: 1,
                title: "clean the house",
                done: false,
            },
            {
                id: 2,
                title: "study Vue",
                done: true,
            },
        ],
    }),
    getters,
    actions,
    mutations,
};

export default count;
