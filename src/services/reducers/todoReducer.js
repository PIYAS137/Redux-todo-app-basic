import { ADDTODO } from "../constants/Constants";


const initialData = {
    arr: [],
};



const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case ADDTODO:
            // eslint-disable-next-line no-case-declarations
            const { _id, data } = action.payload;
            return {
                ...state,
                arr: [...state.arr, { _id, data }]
            }

        default:
            return state;
    }
}

export default todoReducers;