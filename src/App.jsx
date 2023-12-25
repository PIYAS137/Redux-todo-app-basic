
import './App.css'
import MapList from './components/MapList'
import TodoTextField from './components/TodoTextField'

function App() {

  return (
    <div className=' bg-black w-full h-screen flex items-center justify-center'>
      <div className=' bg-gray-700 max-w-xl mx-auto p-4 rounded-lg min-w-[400px] '>
        <TodoTextField />
        <MapList/>
      </div>
    </div>
  )
}

export default App
