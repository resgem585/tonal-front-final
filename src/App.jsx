import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Login } from './Pages/Login'
import Navbar from './layouts/Navbar'
import Home from './Pages/Home'
import Juegos from './Pages/Juegos'
import NewJuego from './Pages/NewJuego'
import Temazcall from './Pages/Temazcall'

function App() {
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:3000/'
  })
  

  return (
    <Router>
    <ApolloProvider client={client}>
      <Navbar />
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/juegos" element={<Juegos />} />
        <Route path="/newjuego" element={<NewJuego />} />
        <Route path="/temazcall" element={<Temazcall />} />
      </Routes>
    </ApolloProvider>
  </Router>
  )
}

export default App
