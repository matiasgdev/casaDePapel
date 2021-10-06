let {exec} = require('child_process')
let path = require('path')

nombreCarpeta = '101';

function crearCarpeta() {
    return new Promise((resolve, reject) => {
        let workingFolder = [__dirname, nombreCarpeta].join('')
        let comando = ['mkdir', nombreCarpeta].join(' ')

        exec(comando, {  cdw: __dirname }, (err, stdout, stderr) => {
            if (err) {
                reject(err)
                return
            }
            resolve()
        })
    })
}

function clonarRepo() {
    return new Promise((resolve, reject) => {
        let comando = 'git clone --depth=1 git@github.com:arteysoft/ic.git'
        let workingFolder = path.resolve(__dirname, nombreCarpeta)
        console.log(workingFolder)
        exec(comando, { cwd: workingFolder }, (err, stdout, stderr) => {
            if (err) {
                reject(err)
                return
            }
            console.log(stdout)
            resolve()
        })
    })
}

function apagarServidor() {
    return new Promise((resolve, reject) => {
        // hay un endpoint que es /close
    })
}

function encenderServidor() {
    return new Promise((resolve, reject) => {
        let workingFolder = path.resolve(__dirname, nombreCarpeta, 'ic')
        let comando = 'node server.js'
        exec(comando, { cwd: workingFolder }, (err, stdout, stderr) => {
            if (err) {
                reject(err)
                return
            }
            resolve()
        })
    })
}

(async function () {
    await crearCarpeta()
    await clonarRepo()
    await encenderServidor()
})()