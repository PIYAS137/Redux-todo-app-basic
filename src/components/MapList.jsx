import { useSelector } from "react-redux"


const MapList = () => {
    const datas = useSelector(state =>state.arr);



  return (
    <div>
        {
            datas.map((one)=>{
                return(
                    <h1 key={one._id} className=" bg-black text-yellow-300 p-2 rounded-lg px-5 mt-2">{one.data}</h1>
                )
            })
        }
    </div>
  )
}

export default MapList