import React, { useState, useEffect } from 'react'
import { Link,useHistory } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import axios from 'axios'

const AddPlaylistScreen = () => {
 const [name, setName] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
const history=useHistory()
  const redirect ='/'
/* location.search ? location.search.split('=')[1] : */
  useEffect(() => {
  


  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    async function add(){
        const res = await axios.post(`/playlist/create`,{user:userInfo.id,name})
    }
    add()
history.push('/')
  }

  return (
    <FormContainer>
      <h1>Create Playlist</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>


        <Button type='submit' variant='primary'>
          Create
        </Button>
      </Form>

    </FormContainer>
  )
  
}

export default AddPlaylistScreen
