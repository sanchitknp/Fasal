import jwt from 'jsonwebtoken'

const generateToken = (id) => {
   let JWT_SECRET = "1234"

return jwt.sign({id}, JWT_SECRET,{
    expiresIn: '30d'
})
}


export default generateToken