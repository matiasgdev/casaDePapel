const jwtdecode = require('jwt-decode')

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYXgiLCJpYXQiOjE2MzI5Mjk2NDMsInJvbCI6IlBPUlRFUklBIiwiZXhwIjoxNjMyOTI5NjczfQ.eE7yPo0VCFkm2a74NzKxmvTwu4JE9HM4p7jcFJE4QeQ'

console.log(jwtdecode(token))