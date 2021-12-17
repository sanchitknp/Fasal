import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'

const HomeScreen = ({ match }) => {
  const [playlist,setPlaylist] = useState([])

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin


  useEffect(() => {
 async function getplaylist(){
const res = await axios.get(`/playlist/${userInfo.id}`)
console.log(res)
setPlaylist(res.data.data)
 } 
getplaylist()
  }, [])

  return (
    <>
    <Link to = '/add'>Add new playlist</Link>
      <h1>Your Playlists</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {playlist.map((list) => (
              <Col key={list._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={list} />
              </Col>
            ))} 
          </Row>
        </>
      )}
    </>
  )
}

export default HomeScreen
