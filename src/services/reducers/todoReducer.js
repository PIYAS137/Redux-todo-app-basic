import { ADDTODO, DELETETODO } from "../constants/Constants";


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
        case DELETETODO:
            return{
                ...state,
                arr : state.arr.filter(one=>one._id !==action.payload._id)
            }

        default:
            return state;
    }
}

export default todoReducers;