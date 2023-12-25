import { ADDTODO, DELETETODO, RESET } from "../constants/Constants"




export const addTodoAction = (data)=>{
    return {
        type: ADDTODO,
        payload: {
            _id : new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteTodo = (sid)=>{
    return{
        type: DELETETODO,
        payload : {
            _id : sid
        }
    }
}

export const resetAction = ()=>{
    return {
        type: RESET
    }
}