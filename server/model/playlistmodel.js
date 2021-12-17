import mongoose from 'mongoose'



const movieSchema = mongoose.Schema({
    Title: {
        type:String,
    },
    Poster: {
        type:String,
    }
    },{
        timestamp : true
    })       

const playlistSchema = mongoose.Schema({
name : {
    type:String,
    required :true
},
user: {
    type:  String,// mongoose.Schema.Types.ObjectId,
    required: true
   // ref: 'User',
  }, 
movies:[movieSchema],
},{
    timestamp : true
})                     

const Playlist = mongoose.model('Playlist',playlistSchema)

export default Playlist