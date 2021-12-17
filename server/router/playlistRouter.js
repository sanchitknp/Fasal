import express from 'express'
const router = express.Router()
import { protect } from '../middlewares/authMiddleware.js'
import {getMyPlaylist, addMovie,createMyPlaylist,getPlaylistById} from '../controllers/playlistController.js'


router.route('/create').post(createMyPlaylist)
router.route('/:id').get(getMyPlaylist).post(addMovie)
router.route('/movies/:id').get(getPlaylistById)

export default router