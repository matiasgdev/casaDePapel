const uuid = require('uuid')
const client = require('./redis-client')


function associateSessionUser(user) {
  if (!user)
    throw new Error('Debes asociar un usuario')
  
  return Promise.resolve((resolve, rejects) => {
    const id = uuid.v4()
    
    client.set(id, user, (err) => {
      if (err) {
          console.log(err)
          rejects('Server error')
      }
      
      client.quit(()=>{
        resolve(id)
      })
      
    })

  })
  
}


module.exports = associateSessionUser