import { ADDTODO } from "../constants/Constants"




export const addTodoAction = (data)=>{
    return {
        type: ADDTODO,
        payload: {
            _id : new Date().getTime().toString(),
            data: data
        }
    }
}