import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import LoginScreen from './screens/LoginScreen'
import AddPlaylistScreen from './screens/AddPlaylistScreen'
import PlaylistScreen from './screens/PlaylistScreen'
import AddMovieScreen from './screens/AddMovieScreen'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
   <>
   <Router>
   <Header />
   <main className = 'py-3'>
     <Container>
 
    <Route path = '/register' component = {RegisterScreen} exact/>
    <Route path = '/login' component = {LoginScreen} exact />
    <Route path = '/add' component = {AddPlaylistScreen} exact />
    <Route path = '/' component = {HomeScreen} exact />    
    <Route path = '/playlist/:id' component = {PlaylistScreen} exact />
    <Route path = '/add/movie/:id' component = {AddMovieScreen} exact />

     </Container>
     </main>
   <Footer /> 
  
   </Router> 
   </>
  )
}

export default App;
