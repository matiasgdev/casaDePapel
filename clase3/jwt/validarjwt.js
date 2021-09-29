const jwt = require('jsonwebtoken')
const secreto = require('./secreto')

try {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYXgiLCJpYXQiOjE2MzI5MzA0NTEsInJvbCI6IlBPUlRFUklBIiwiZXhwIjoxNjMyOTMwNDgxfQ.Zj38fy6DJ3yS-rp_P5KbS7jhHAM7ZFD1E3-r4i2oxuQ'
    let objeto = jwt.verify(token, secreto)
    console.log(objeto)
}
catch (err) {
    console.log(err)
}
