
import './App.css'
import MapList from './components/MapList'
import TodoTextField from './components/TodoTextField'

function App() {

  return (
    <div className=' bg-black w-full h-screen'>
      <div className=' bg-gray-700 max-w-xl mx-auto p-4 rounded-lg '>
        <TodoTextField />
        <MapList/>
      </div>
    </div>
  )
}

export default App
