import { createStore } from "vuex";

import count from "./count";
import todos from "./todos";

export default createStore({
    modules: {
        countStore: count,
        todoStore: todos,
    },
});
