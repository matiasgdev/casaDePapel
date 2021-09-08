const crontab = require('node-crontab')

crontab.scheduleJob('* * * * *', () => {
    let msg = ['ejecutando tarea: ', new Date()].join('')
    console.log(msg)
})

