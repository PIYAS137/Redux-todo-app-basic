import { DECREMENT, INCREMENT, RESET } from "../constants/Constants";


const inititalCount = { counter: 0 }

export const counterReducer = (state = inititalCount, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case RESET:
            return {
                ...state,
                counter: 0
            }


        default:
            return state;
    }
}

export default counterReducer;