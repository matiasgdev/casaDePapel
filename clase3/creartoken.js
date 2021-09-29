let redisClient = require('./lib/redis-client')

redisClient.on('error', err => {
    console.log('se produjo un error')
    console.log(err)
})

const TOKEN = '42e8c337-6797-4f73-adc5-ee9ce5808ca2'

redisClient.set(TOKEN, 'max', (err) => {
    if (err) {
        console.log(err)
        return
    }
    redisClient.expire(TOKEN, 30, (err) => {
        if (err) {
            console.log(err)
            return
        }
        redisClient.quit(()=>{})
        console.log('Token seteado exitosamente !!!')
    })
})

