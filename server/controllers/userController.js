import AsyncHandler from 'express-async-handler'
import User from '../model/userModel.js'
import generateToken from '../utils/generateToken.js'

export{authUser,registerUser,getUserProfile, updateUserProfile, updateUser, getUserById}

const authUser = AsyncHandler( async (req,res) => {
    const{email,password} = req.body
    const user = await User.findOne({email})
    if(user&& await user.matchPassword(password)){
    res.json({
       email : user.email,
       name:user.name,
       id:user._id,
       isAdmin:user.isAdmin,
       token:generateToken(user._id),
    })
}
else {
    res.status(400)
    throw new Error('inavlid email or password')
}
})

const registerUser = AsyncHandler( async (req,res) => {
    const{name,email,password} = req.body
const userExist = await User.findOne({email})
if(userExist)
{
    res.status(400)
    throw new Error('User already exist')
}

    const user = await User.create({name,email,password})

    if(user)
    {
        res.status(201).json({  email : user.email,
            name:user.name,
            id:user._id,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)})
    }
    else{
        res.status(404)
        throw new Error('Invalid User data')
    }

})



const getUserProfile = AsyncHandler( async (req,res) => {
    const user = await User.findById(req.user.id)

    if(user){
   res.json({ email : user.email,
    name:user.name,
    id:user._id,
    isAdmin:user.isAdmin})
    }
    else{
        res.status(404)
        throw new Error('User not found')   
    }
 
})



const updateUserProfile = AsyncHandler( async (req,res) => {
    const user = await User.findById(req.user.id)

    if(user){
   user.name = req.body.name || user.name
   user.email = req.body.email || user.email
   if(req.body.password)
   {
       user.password = req.body.password || user.password
   }
   const updatedUser = await user.save()
   res.json({
    email : updatedUser.email,
    name:updatedUser.name,
    id:updatedUser._id,
    isAdmin:updatedUser.isAdmin,
    token:generateToken(updatedUser._id),
   })
    }
    else{
        res.status(404)
        throw new Error('User not found')   
    }
 
})




const getUserById = AsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password')
  
    if (user) {
      res.json(user)
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })
 

  const updateUser = AsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
  
    if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      user.isAdmin = false

      if(req.body.isAdmin)
      {
        user.isAdmin = true
      }
  
      const updatedUser = await user.save()
  
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })