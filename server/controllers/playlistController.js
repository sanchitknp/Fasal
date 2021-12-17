import asyncHandler from 'express-async-handler'
import Playlist from '../model/playlistmodel.js'


const createMyPlaylist = asyncHandler(async (req,res) => {
    const{name,user} = req.body
    const playlist = new Playlist({
      name,user
    })
    
    const play = await playlist.save()
    res.status(201).json(play);
      
})

const addMovie = asyncHandler(async (req, res) => {

  const {
   Title,
   Poster
  } = req.body
let playlist= await Playlist.findById(req.params.id)

let movies = []
movies= playlist.movies
movies.push({Title,Poster})
playlist.movies=  movies


    const createdPlaylist = await playlist.save()

    res.status(201).json(createdPlaylist)
  }
)



const getMyPlaylist = asyncHandler(async (req, res) => {
  const playlist = await Playlist.find({user:req.params.id})
  res.json({data:playlist})
})

const getPlaylistById = asyncHandler(async (req, res) => {
  const playlist = await Playlist.findById(req.params.id)
  res.json(playlist.movies)
})


export {
  addMovie,
  createMyPlaylist,
   getMyPlaylist,
   getPlaylistById
}
