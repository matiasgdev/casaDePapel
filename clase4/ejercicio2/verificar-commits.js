let {exec} = require('child_process')

let listaCommits = []

function pausa() {
    return new Promise((resolve) => {
        setTimeout(resolve, 5000)
    })
}

function verificarCommits() {
    return new Promise((resolve, reject) => {
        let comando = 'curl -u abcde:abcde https://api.github.com/repos/arteysoft/ic/commits'
        exec(comando, (err, stdout, stderr) => {
            if (err) {
                reject(err)
                return
            }
            if (stderr) {
            }
            try {
                let objJson = JSON.parse(stdout)
                let arrRet = objJson.map(z => z.sha)
                resolve(arrRet)
            }
            catch (err) {
                reject(err)
            }
        })
    })
}

(async function() {
    listaCommits = await verificarCommits()
    for (;;) {
        await pausa()
        try {
            let nuevosCommits = await verificarCommits()
            console.log('Nuevos commits')
            console.log(nuevosCommits)
            console.log('Commits historicos')
            console.log(listaCommits)
            console.log()
            if (nuevosCommits.length > listaCommits) {
                console.log('DISPARANDO PROCESO !!!!!')
                // disparar un proceso para clonar el siguiente commit
                // asignar a listaCommits el nuevosCommits
            }
        }
        catch (err) {
            console.log('se produjo un error')
            console.log(err)
            console.log()
        }
    }

})()
