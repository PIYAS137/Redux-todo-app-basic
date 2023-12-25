import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodoAction } from "../services/actions/todoAction";
import Swal from 'sweetalert2'

const TodoTextField = () => {

    const [val, setVal] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (val !== '') {
            dispatch(addTodoAction(val))
            setVal('')
        }else{
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "Write Something",
                showConfirmButton: false,
                background:'#303030',
                color:"#ff9b00",
                width:'15em',
                timer: 1000
              });
        }
    }


    return (
        <form onSubmit={handleSubmit} className=" flex space-x-2">
            <input onChange={e => setVal(e.target.value)} value={val} type="text" placeholder="✍ Type here " className="input text-white bg-black input-bordered border-yellow-500 w-full" />
            <button type='submit' className="btn bg-yellow-500 border-none text-gray">ADD</button>
        </form>
    )
}

export default TodoTextField