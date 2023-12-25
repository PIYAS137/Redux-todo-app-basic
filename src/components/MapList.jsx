import { useDispatch, useSelector } from "react-redux"
import { FaTrashAlt } from "react-icons/fa";
import { deleteTodo } from "../services/actions/todoAction";


const MapList = () => {
    const datas = useSelector(state => state.arr);
    const dispatch = useDispatch();

    const handleClickDelete = (sid) => {
        dispatch(deleteTodo(sid))
    }



    return (
        <div>
            {
                datas.map((one) => {
                    return (
                        <div key={one._id} className=" mt-2 flex items-center bg-black rounded-lg px-3">
                            <h1 className="w-full h-full p-2 rounded-lg text-yellow-300">{one.data}</h1>
                            <FaTrashAlt onClick={() => handleClickDelete(one._id)} className="text-red-500 cursor-pointer hover:scale-125" />
                        </div>
                    )
                })
            }
            {
                datas?.length > 0 &&
                <div className=" text-center">
                    <button className="btn bg-red-700 text-white btn-sm mt-3">Reset</button>
                </div>
            }
        </div>
    )
}

export default MapList