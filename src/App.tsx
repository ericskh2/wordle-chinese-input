import { Box, Container, Grid } from '@mui/material'
import './App.css'
import InputArea from './components/InputArea'
import Navbar from './components/Navbar'
import Puzzle from './components/Puzzle'

function App() {

  return (
    <Container maxWidth="sm">
      <Navbar/>
      <Puzzle/>
      <InputArea/>
    </Container>
  )
}

export default App;
