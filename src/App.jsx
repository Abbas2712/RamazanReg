import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homepage'
import EditVenue from './pages/editVenue'
import Header from './components/header'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/familyVenues/:id' element={<EditVenue/>}/>

      </Routes>
    </div>
  )
}

export default App
