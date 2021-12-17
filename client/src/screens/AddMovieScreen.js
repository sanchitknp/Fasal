import React, { useState, useEffect } from 'react'
import { Link,useHistory,useParams } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import axios from 'axios'

const AddMovieScreen = () => {
 const [name, setName] = useState('')
 const [error, setError] = useState('')
 const [p, setp] = useState({})

 const [message, setMessage] = useState('')
const {id} = useParams()
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
const history=useHistory()
  const redirect ='/'
  let apikey = "a0aa50ba"


useEffect(() => {
    async function addMovie()
    {
     
    const res = await axios.post(`/playlist/${id}`,{Title:p.Title,Poster:p.Poster})
    console.log(res)
    history.push('/')
    }
    if(p.Title){
    addMovie()
    }
},[p])

  const submitHandler = (e) => {
    e.preventDefault()
    async function add(){
        const res = await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&t=${name}`)
        
        console.log(res)
        if(res.data.Response==="False"){
        setError("No movie found");
setMessage('')
        }
else
{setp(res.data)
setError('')
//addMovie()
setMessage('Movie added successfully')
}
    }
    
    add()
  }

  return (
    <FormContainer>
      <h1>Add Movie</h1>
      {error && <Message variant='danger'>{error}</Message>}

      {message && <Message variant='success'>{message}</Message>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>


        <Button type='submit' variant='primary'>
          Add
        </Button>
      </Form>

    </FormContainer>
  )
  
}

export default AddMovieScreen
