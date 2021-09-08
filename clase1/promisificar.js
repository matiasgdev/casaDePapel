let _ = require('underscore')
let fs = require('fs')

function promisificar(fn) {
    return new Promise((resolve, reject) => {
        fn((err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(data)
        })
    })
}

promisificar(_.partial(fs.readFile, '/var/casaDePapel/archivo', 'utf-8'))
.then(z => console.log(z))
.catch(err => console.log(err))
