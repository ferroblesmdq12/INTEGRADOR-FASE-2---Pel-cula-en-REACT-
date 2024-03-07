import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import estilos from './estilos/App.modulo.css'
import { PaginaPrincipal }  from './componentes/PaginaPrincipal'
import DetallePelicula from './componentes/DetallePelicula'
import { Container } from 'react-bootstrap'

function App() {

  return (
    <>
    <Container>
      <Routes>
        <Route path='/' element={<PaginaPrincipal />} />
        <Route path='/movie/:id' element={<DetallePelicula />} />
      </Routes>
    </Container>
    </>
  )
}

export default App