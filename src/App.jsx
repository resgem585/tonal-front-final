import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Login } from './Pages/Login'
import { Form } from './components/Form'
import Home from './Pages/Home'
import Juegos from './Pages/Juegos'
import Tonal from './Pages/Tonal'
import NewJuego from './Pages/NewJuego'
import NewTonal from './Pages/NewTonal'
import NewTemaz from './Pages/NewTemaz'
import Temaz from './Pages/Temaz'
import Horoscopo from "./Pages/Horoscopo"
import Puerta1 from './Pages/Puerta1'
import Curiosidades from './Pages/Curiosidades'
import NewCuriosidades from './Pages/NewCuriosidades'
import Mono from './Pages/Mono'

function App() {
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://tonal-back-final-q5c91q1nr-resgem585.vercel.app/'
  })
  

  return (
    <Router>
    <ApolloProvider client={client}>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/create" element={<Form />} />
        <Route path="/home" element={<Home />} />
        <Route path="/juegos" element={<Juegos />} />
        <Route path="/temazcal" element={<Temaz />} />
        <Route path="/newjuego" element={<NewJuego />} />
        <Route path="/tonal" element={<Tonal />} />
        <Route path="/newtonal" element={<NewTonal />} />
        <Route path="/newtemaz" element={<NewTemaz />} />
        <Route path="/horoscopo" element={<Horoscopo />} />
        <Route path="/primerapuerta" element={<Puerta1 />} />
        <Route path="/newcuriosidades" element={<NewCuriosidades />} />
        <Route path="/curiosidades" element={<Curiosidades />} />
        <Route path="/mono" element={<Mono />} />
      </Routes>
    </ApolloProvider>
  </Router>
  )
}

export default App
