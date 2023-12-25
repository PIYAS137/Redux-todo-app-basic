import { useDispatch, useSelector } from "react-redux"
import { decrementCounterAction, incrementConterAction, resetCounterAciton } from "../services/actions/counterAction";

const Counter = () => {

    const x = useSelector(state=>state.counter)
    const dispatch = useDispatch();

    const handleIncrement=()=>{
        dispatch(incrementConterAction())
    }
    const handleDecrement=()=>{
        dispatch(decrementCounterAction())
    }
    const handleReset=()=>{
        dispatch(resetCounterAciton())
    }


  return (
    <div>
        <h1>Counter : {x}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset} style={{margin:'0rem 1rem'}}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter