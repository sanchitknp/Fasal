import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Movies = ({movie}) => {
return (
   
    <Card className = "my-3 p-3 rounded">
 
      <Card.Img src = {movie.Poster} variant ='top'/>
        <Card.Body>
        
      <Card.Title as ="div">
          <strong>{movie.Title}</strong>
          </Card.Title>
        </Card.Body>
    </Card>
)
}

export default Movies