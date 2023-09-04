import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/index.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route pat="/" element={<Core/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
