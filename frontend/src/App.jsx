import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'
import ListMessages from './components/ListMessages'
import MessageDetails from './components/MessageDetails'
import EditMessage from './components/EditMessage'



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="/list" element={<ListMessages/>}/>
        <Route path="/message/:id" element={<MessageDetails/>}/>
        <Route path="/edit-message/:id" element={<EditMessage />} />

      </Routes>

    </Router>
   
  )
}

export default App
