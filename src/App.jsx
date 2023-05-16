import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Login } from './Pages/Login'
import Home from './Pages/Home'
import Juegos from './Pages/Juegos'
import Tonal from './Pages/Horoscopos/Tonal'
import NewJuego from './Pages/NewJuego'
import NewTonal from './Pages/Horoscopos/NewTonal'
import NewTemaz from './Pages/Temazcal/NewTemaz'
import Temaz from './Pages/Temazcal/Temaz'
import Horoscopo from "./Pages/Horoscopos/Horoscopo"
import Puerta1 from './Pages/Temazcal/Puerta1'
import Curiosidades from './Pages/Curiosidades'
import NewCuriosidades from './Pages/NewCuriosidades'
import Mono from './Pages/Horoscopos/Mono'

function App() {
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:3000/'
  })
  

  return (
    <Router>
    <ApolloProvider client={client}>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path='/juegos' element={<Juegos />} />
        <Route path="/temazcal" element={<Temaz/>} />
        <Route path="/newjuego" element={<NewJuego />} />
        <Route path='/tonal' element={<Tonal />} />
        <Route path='/newtonal' element={<NewTonal />} />
        <Route path='/newtemaz' element={<NewTemaz />} />
        <Route path='/horoscopo' element={<Horoscopo />} />
        <Route path='/primerapuerta' element={<Puerta1 />} />
        <Route path='/newcuriosidades' element={<NewCuriosidades />} />
        <Route path='/curiosidades' element={<Curiosidades />} />
        <Route path='/mono' element={<Mono />} />
      </Routes>
    </ApolloProvider>
  </Router>
  )
}

export default App
