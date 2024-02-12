import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homepage'
import EditVenue from './pages/editVenue'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path='/homepage' element={<HomePage/>}/>
      <Route path='/familyVenues/:id' element={<EditVenue/>}/>

    </Routes>
  )
}

export default App
