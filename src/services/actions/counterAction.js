import { DECREMENT, INCREMENT, RESET } from "../constants/Constants"


export const incrementConterAction = ()=>{
    return {
        type: INCREMENT
    }
}

export const decrementCounterAction = ()=>{
    return{
        type: DECREMENT
    }
}

export const resetCounterAciton = ()=>{
    return{
        type: RESET
    }
}

