import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodoAction } from "../services/actions/todoAction";

const TodoTextField = () => {

    const [val,setVal]=useState('');
    const dispatch = useDispatch();

    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(addTodoAction(val))
        setVal('')
    }


    return (
        <form onSubmit={handleSubmit} className=" flex space-x-2">
            <input onChange={e=>setVal(e.target.value)} value={val} type="text" placeholder="✍ Type here " className="input text-white bg-black input-bordered input-primary w-full" />
            <button type='submit' className="btn bg-yellow-500 border-none text-gray">ADD</button>
        </form>
    )
}

export default TodoTextField