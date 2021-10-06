let {exec} = require('child_process')

let comando = 'curl https://api.github.com/repos/arteysoft/ic/commits'
exec(comando, (err, stdout, stderr) => {
    if (err) {
        console.log(err)
        return
    }
    if (stderr) {
        console.log('---------------------------------------------------')
        console.log(stderr)
        console.log('---------------------------------------------------')
    }
    console.log(stdout)
})