let { exec } = require('child_process')
let path = require('path');
const asyncExec = require('./async-exec');

let nombreCarpeta = require('../package.json').version

const repo = process.argv[2]

async function crearCarpeta() {
    return await asyncExec(`mkdir ${nombreCarpeta}`, { cwd: __dirname })
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
        // asyncExec('curl localhost:3000/close')
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
    // await clonarRepo()
    // await encenderServidor()
})()