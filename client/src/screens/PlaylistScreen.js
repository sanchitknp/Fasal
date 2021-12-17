import React, { useEffect,useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
import Movies from '../components/Movies'
import Message from '../components/Message'
import Loader from '../components/Loader'

const PlaylistScreen = () => {
  const [movies,setMovies] = useState([])
const {id} = useParams()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

console.log(id)
  useEffect(() => {
 async function getmovies(){
const res = await axios.get(`/playlist/movies/${id}`)
console.log(res)
setMovies(res.data)
 } 
getmovies()
  }, [])

  return (
    <>
    <Link to = {`/add/movie/${id}`}>Add new movie</Link>
      <h1>Your Movies</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {movies.map((list) => (
              <Col key={list._id} sm={12} md={6} lg={4} xl={3}>
                <Movies movie={list} />
              </Col>
            ))} 
          </Row>
        </>
      )}
    </>
  )
}

export default PlaylistScreen
