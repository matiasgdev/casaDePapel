let fs = require('fs')

let apendFilePromise = () => {
    return new Promise((resolve, reject) => {
        let s = (new Date()).toString() + '\n\r'
        fs.appendFile('/var/casaDePapel/archivo', s, 'utf-8', (err) => {
            reject(err)
            return
        })
        resolve('Archvivo grabado')
    })
}

apendFilePromise()
.then(z => { console.log(z) })
.then(z => apendFilePromise())
.then(z => 2)
.then(z => console.log(z))
.catch(err => console.log(err))


