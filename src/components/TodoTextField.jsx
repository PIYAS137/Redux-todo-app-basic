
const TodoTextField = () => {
    return (
        <div className=" flex space-x-3">
            <input type="text" placeholder="✍ Type here " className="input bg-black input-bordered input-primary w-full" />
            <button className=" btn bg-yellow-500 border-none text-gray">ADD</button>
        </div>
    )
}

export default TodoTextField